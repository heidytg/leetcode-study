package solution

// Time Based Key-Value Store — https://leetcode.com/problems/time-based-key-value-store/
type tmEntry struct {
	timestamp int
	value     string
}

type TimeMap struct {
	store map[string][]tmEntry
}

func Constructor() TimeMap {
	return TimeMap{store: make(map[string][]tmEntry)}
}

func (m *TimeMap) Set(key, value string, timestamp int) {
	m.store[key] = append(m.store[key], tmEntry{timestamp, value})
}

func (m *TimeMap) Get(key string, timestamp int) string {
	entries := m.store[key]
	lo, hi := 0, len(entries)-1
	res := ""
	for lo <= hi {
		mid := lo + (hi-lo)/2
		if entries[mid].timestamp <= timestamp {
			res = entries[mid].value
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return res
}

// timeMapOps is the test driver: replay LeetCode-style operation/argument lists.
// args carry mixed string/number values, so they decode as [][]any.
func timeMapOps(ops []string, args [][]any) []*string {
	tm := Constructor()
	out := []*string{}
	for i, op := range ops {
		switch op {
		case "TimeMap":
			out = append(out, nil)
		case "set":
			key := args[i][0].(string)
			value := args[i][1].(string)
			ts := int(args[i][2].(float64))
			tm.Set(key, value, ts)
			out = append(out, nil)
		case "get":
			key := args[i][0].(string)
			ts := int(args[i][1].(float64))
			v := tm.Get(key, ts)
			out = append(out, &v)
		}
	}
	return out
}
