# 78. Subsets

https://leetcode.com/problems/subsets/

- **Difficulty:** Medium
- **Pattern:** Backtracking (include/exclude each element)
- **Category:** Backtracking
- **Tags:** array, backtracking, bit-manipulation

## Statement

Given an array `nums` of **unique** integers, return all possible subsets (the power set).
No duplicate subsets; any order.

## Signature

`subsets(nums: number[]) -> number[][]`  (any order of subsets)

## Constraints

- 1 ≤ nums.length ≤ 10
- -10 ≤ nums[i] ≤ 10; all unique.

## Approach

For each index, branch on a binary choice: include `nums[i]` in the current subset or not.
At the end of the array, record a copy of the current subset. This explores all `2^n`
include/exclude combinations exactly once. (Equivalently, iterate a bitmask `0..2^n-1`.)

## Complexity

- **Time:** O(n · 2^n) — 2^n subsets, each up to length n to copy.
- **Space:** O(n) recursion depth (plus the output).

## Pattern

**Subset/power-set backtracking.** The signal: enumerate every combination of independent
choices. The include/exclude recursion (or a bitmask) is the template; *Subsets II* adds
duplicate handling, and combination problems constrain which choices are valid.

## Interview notes

- **Brute force → optimal:** This is optimal — there are 2^n subsets to emit. The choice is
  recursion vs iterative bitmask.
- **Key insight:** independent binary choice per element; copy the subset when recording
  (it's mutated during backtracking).
- **Edge cases:** single element (`[[], [x]]`); the empty subset is always included.
- **Common mistakes:** appending the live `subset` reference instead of a copy; producing
  duplicates (only an issue with repeated values — see 90).
- **Follow-ups:** *Subsets II* (90, with duplicates); subsets summing to a target.
- **Related:** Subsets II (90), Combination Sum (39).
