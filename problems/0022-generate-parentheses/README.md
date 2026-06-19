# 22. Generate Parentheses

https://leetcode.com/problems/generate-parentheses/

- **Difficulty:** Medium
- **Pattern:** Backtracking with validity pruning
- **Category:** Stack
- **Tags:** string, backtracking, recursion, dynamic-programming

## Statement

Given `n` pairs of parentheses, generate all combinations of well-formed parentheses.
Return them in any order.

## Signature

`generateParenthesis(n: number) -> string[]`

## Constraints

- 1 ≤ n ≤ 8

## Approach

Build strings character by character, tracking how many `(` and `)` have been placed. Two
pruning rules keep every partial string a valid prefix: add `(` only while `open < n`,
and add `)` only while `close < open` (never more closers than openers). When the string
reaches length `2n` it is complete and valid — record it. This explores only well-formed
prefixes, avoiding the generate-then-filter blowup.

## Complexity

- **Time:** O(4^n / √n) — the nth Catalan number of results, each of length 2n.
- **Space:** O(n) recursion depth (excluding the output).

## Pattern

**Backtracking with constraint pruning.** The signal: enumerate all valid configurations
of a combinatorial structure. Extend a partial solution only along choices that keep it
valid (`close < open`), and record on completion. The `open/close` counters are the state
that makes pruning O(1).

## Interview notes

- **Brute force → optimal:** Generating all 2^(2n) strings and filtering valid ones is
  wasteful. Pruning invalid prefixes early yields only the Catalan-many valid strings.
- **Key insight:** invariant `close < open` guarantees a closer always has a matching
  opener — the validity rule baked into the recursion.
- **Edge cases:** n = 1 → `["()"]`; results count grows as Catalan numbers.
- **Common mistakes:** allowing `)` when `close >= open`; appending before the base case;
  mutating shared state without restoring (string concatenation sidesteps this).
- **Follow-ups:** count without listing → Catalan number formula; *Valid Parentheses* (20)
  is the verification counterpart.
- **Related:** Valid Parentheses (20), Subsets (78).
