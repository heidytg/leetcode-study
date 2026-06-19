// Package harness is a reusable, reflection-based test runner for the LeetCode
// problems. Each problem's solution_test.go hands its function(s) to RunFixture,
// which loads ../tests.json and decodes each case's args by the function's parameter
// types — so no per-problem typed unmarshaling is needed.
package harness

import (
	"encoding/json"
	"os"
	"path/filepath"
	"reflect"
	"sort"
	"testing"
)

type rawCase struct {
	Args     []json.RawMessage `json:"args"`
	Expected json.RawMessage   `json:"expected"`
}

type fixture struct {
	Function string    `json:"function"`
	Compare  string    `json:"compare"`
	Cases    []rawCase `json:"cases"`
}

// RunFixture loads ../tests.json (relative to the calling test's package dir) and runs
// every case against the named function in fns. For the "roundtrip" compare mode it
// expects "encode" and "decode" entries and checks decode(encode(x)) == expected.
func RunFixture(t *testing.T, fns map[string]any) {
	t.Helper()
	data, err := os.ReadFile(filepath.Join("..", "tests.json"))
	if err != nil {
		t.Fatalf("read tests.json: %v", err)
	}
	var fx fixture
	if err := json.Unmarshal(data, &fx); err != nil {
		t.Fatalf("parse tests.json: %v", err)
	}

	for i, c := range fx.Cases {
		if fx.Compare == "roundtrip" {
			runRoundtrip(t, i, c, fns)
			continue
		}
		fn := reflect.ValueOf(fns[fx.Function])
		if !fn.IsValid() {
			t.Fatalf("case %d: function %q not provided to RunFixture", i, fx.Function)
		}
		ft := fn.Type()
		in := make([]reflect.Value, len(c.Args))
		for j, raw := range c.Args {
			pv := reflect.New(ft.In(j))
			if err := json.Unmarshal(raw, pv.Interface()); err != nil {
				t.Fatalf("case %d arg %d: %v", i, j, err)
			}
			in[j] = pv.Elem()
		}
		got := fn.Call(in)[0].Interface()

		ev := reflect.New(ft.Out(0))
		if err := json.Unmarshal(c.Expected, ev.Interface()); err != nil {
			t.Fatalf("case %d expected: %v", i, err)
		}
		want := ev.Elem().Interface()

		if !equal(got, want, fx.Compare) {
			t.Errorf("case %d: %s(...) = %v; want %v", i, fx.Function, got, want)
		}
	}
}

func runRoundtrip(t *testing.T, i int, c rawCase, fns map[string]any) {
	enc := reflect.ValueOf(fns["encode"])
	dec := reflect.ValueOf(fns["decode"])
	if !enc.IsValid() || !dec.IsValid() {
		t.Fatalf("case %d: roundtrip needs both encode and decode", i)
	}
	pv := reflect.New(enc.Type().In(0))
	if err := json.Unmarshal(c.Args[0], pv.Interface()); err != nil {
		t.Fatalf("case %d arg: %v", i, err)
	}
	encoded := enc.Call([]reflect.Value{pv.Elem()})
	got := dec.Call(encoded)[0].Interface()

	ev := reflect.New(reflect.TypeOf(got))
	if err := json.Unmarshal(c.Expected, ev.Interface()); err != nil {
		t.Fatalf("case %d expected: %v", i, err)
	}
	want := ev.Elem().Interface()

	if !equal(got, want, "exact") {
		t.Errorf("case %d: decode(encode(...)) = %v; want %v", i, got, want)
	}
}

func equal(a, b any, mode string) bool {
	if mode == "sorted" || mode == "set" {
		return reflect.DeepEqual(canon(a), canon(b))
	}
	return reflect.DeepEqual(a, b)
}

// canon round-trips through JSON to a generic shape, then recursively sorts every list
// by its JSON form — giving an order-independent canonical value for both sides.
func canon(v any) any {
	data, _ := json.Marshal(v)
	var parsed any
	if err := json.Unmarshal(data, &parsed); err != nil {
		return v
	}
	return canonValue(parsed)
}

func canonValue(v any) any {
	arr, ok := v.([]any)
	if !ok {
		return v
	}
	out := make([]any, len(arr))
	for i, e := range arr {
		out[i] = canonValue(e)
	}
	sort.Slice(out, func(i, j int) bool {
		bi, _ := json.Marshal(out[i])
		bj, _ := json.Marshal(out[j])
		return string(bi) < string(bj)
	})
	return out
}
