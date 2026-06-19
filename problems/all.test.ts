/// <reference types="vite/client" />
import { describe, it, expect } from "vitest";

// Single auto-discovering runner: for every problems/<slug>/tests.json it loads the
// sibling typescript/solution.ts and runs each case. No per-problem test file needed.

type Case = { args: unknown[]; expected: unknown };
type Fixture = { function: string; compare?: string; cases: Case[] };
type Fns = Record<string, (...args: unknown[]) => unknown>;

const fixtures = import.meta.glob<Fixture>("./*/tests.json", { eager: true, import: "default" });
const solutions = import.meta.glob<Fns>("./*/typescript/solution.ts", { eager: true });

const fixZero = (v: unknown): unknown => (Object.is(v, -0) ? 0 : v);
const clean = (v: unknown): unknown => (Array.isArray(v) ? v.map(clean) : fixZero(v));
const canon = (v: unknown): unknown =>
  Array.isArray(v)
    ? v.map(canon).sort((a, b) => (JSON.stringify(a) < JSON.stringify(b) ? -1 : 1))
    : fixZero(v);
const normalize = (v: unknown, mode = "exact"): unknown => (mode === "exact" ? clean(v) : canon(v));

for (const [path, fixture] of Object.entries(fixtures)) {
  const slug = path.slice(2, path.indexOf("/tests.json")); // "./0001-two-sum/tests.json" -> "0001-two-sum"
  const solution = solutions[`./${slug}/typescript/solution.ts`];

  describe(slug, () => {
    if (!solution) {
      it.skip("no typescript/solution.ts", () => {});
      return;
    }

    // Codec problems expose encode/decode; assert decode(encode(x)) === x.
    if (fixture.compare === "roundtrip") {
      const encode = solution.encode as (s: string[]) => string;
      const decode = solution.decode as (s: string) => string[];
      it.each(fixture.cases)("$args", (c) => {
        expect(decode(encode(c.args[0] as string[]))).toEqual(c.expected);
      });
      return;
    }

    it.each(fixture.cases)("$args", (c) => {
      const result = solution[fixture.function](...c.args);
      expect(normalize(result, fixture.compare)).toEqual(normalize(c.expected, fixture.compare));
    });
  });
}
