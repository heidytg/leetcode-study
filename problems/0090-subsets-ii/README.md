# 90. Subsets II

https://leetcode.com/problems/subsets-ii/

- **Difficulty:** Medium
- **Pattern:** Backtracking with duplicate skipping (sorted)
- **Category:** Backtracking
- **Tags:** array, backtracking, bit-manipulation

## Statement

Given an integer array `nums` that **may contain duplicates**, return all possible subsets
without duplicate subsets, in any order.

## Signature

`subsetsWithDup(nums: number[]) -> number[][]`  (any order)

## Constraints

- 1 ≤ nums.length ≤ 10
- -10 ≤ nums[i] ≤ 10 (duplicates allowed).

## Approach

Sort first so equal values are adjacent. Backtrack choosing elements from a `start` index;
record the subset at the top of every call. Within the loop, skip a value equal to the one
just considered at this level (`i > start and nums[i] == nums[i-1]`) — that prevents
generating the same subset via a different copy of a duplicate.

## Complexity

- **Time:** O(n · 2^n) worst case.
- **Space:** O(n) recursion depth.

## Pattern

**Subset backtracking + same-level dedup.** The signal: power set with duplicates. Sorting
groups equal values; skipping repeats *at the same recursion level* (but allowing them
deeper) is the canonical de-duplication trick shared with *Combination Sum II* and
*Permutations II*.

## Interview notes

- **Brute force → optimal:** Generating all subsets then deduping via a set of tuples works
  but is wasteful; the sorted skip avoids duplicates by construction.
- **Key insight:** skip duplicates only when `i > start` (same level) — skipping at `i ==
  start` would wrongly drop the value entirely.
- **Edge cases:** all duplicates (`[2,2,2]` → `[[],[2],[2,2],[2,2,2]]`); single element.
- **Common mistakes:** not sorting; skip condition `i > 0` instead of `i > start`.
- **Follow-ups:** *Combination Sum II* (40) uses the identical dedup idea with a target.
- **Related:** Subsets (78), Combination Sum II (40).
