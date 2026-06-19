# 40. Combination Sum II

https://leetcode.com/problems/combination-sum-ii/

- **Difficulty:** Medium
- **Pattern:** Backtracking, each element once, with dedup
- **Category:** Backtracking
- **Tags:** array, backtracking

## Statement

Given `candidates` (which **may contain duplicates**) and a `target`, return all unique
combinations summing to `target`. Each number may be used **at most once**, and the
solution set must not contain duplicate combinations.

## Signature

`combinationSum2(candidates: number[], target: number) -> number[][]`  (any order)

## Constraints

- 1 ≤ candidates.length ≤ 100
- 1 ≤ candidates[i] ≤ 50; 1 ≤ target ≤ 30.

## Approach

Sort the candidates. Backtrack with a `start` index, recursing at `i+1` (each used once).
Skip duplicates at the same level (`i > start and candidates[i] == candidates[i-1]`) so the
same combination isn't formed via interchangeable equal values. Break early when
`candidates[i] > remain` (sorted ⇒ all later are too big).

## Complexity

- **Time:** O(2^n) worst case over the pruned tree.
- **Space:** O(n) recursion depth.

## Pattern

**Single-use combination + sorted dedup.** The signal: combinations from a multiset with no
reuse and no duplicate results. Combines the `i+1` (no-reuse) recursion of single-use
combinations with the same-level duplicate skip of *Subsets II*.

## Interview notes

- **Brute force → optimal:** Subsets + filter by sum is exponential and needs dedup; the
  sorted backtracking prunes and dedupes directly.
- **Key insight:** sort enables both the `> remain` break and the adjacent-duplicate skip;
  recurse at `i+1` for single use.
- **Edge cases:** duplicates that form the same combination; no valid combination; target
  exactly one element.
- **Common mistakes:** recursing at `i` (allows reuse); skip condition without `i > start`.
- **Follow-ups:** *Combination Sum* (39, with reuse); k numbers summing to n (216).
- **Related:** Combination Sum (39), Subsets II (90).
