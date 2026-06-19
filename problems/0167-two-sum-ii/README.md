# 167. Two Sum II - Input Array Is Sorted

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

- **Difficulty:** Medium
- **Pattern:** Converging two pointers on a sorted array
- **Category:** Two Pointers
- **Tags:** array, two-pointers, binary-search

## Statement

Given a **1-indexed**, non-decreasing array `numbers` and a `target`, return the indices
`[i, j]` (1-based, `i < j`) of the two elements that sum to `target`. Exactly one
solution exists, and you must use O(1) extra space.

## Signature

`twoSum(numbers: number[], target: number) -> number[]`  // 1-based indices

## Constraints

- 2 ≤ numbers.length ≤ 3·10^4
- -1000 ≤ numbers[i], target ≤ 1000
- `numbers` is sorted in non-decreasing order; exactly one solution.

## Approach

Because the array is sorted, place a pointer at each end. The sum of the two ends tells
us which way to move: if it's too small, the only way to increase it is to advance the
left pointer; if too large, retreat the right pointer; if equal, return the 1-based
indices. The sortedness makes each move provably safe — we never skip the answer.

## Complexity

- **Time:** O(n) — pointers move toward each other at most n steps total.
- **Space:** O(1) — no hash map needed (unlike the unsorted *Two Sum*).

## Pattern

**Two pointers on sorted input.** The signal: a sorted array plus "find a pair/triple
meeting a sum condition." Sortedness lets each comparison eliminate one candidate per
step — the same engine drives *3Sum* and *Container With Most Water*.

## Interview notes

- **Brute force → optimal:** Nested loops O(n²); hash map O(n)/O(n). But the array is
  already sorted, so two pointers give O(n)/O(1) — strictly better on space. Calling out
  that sortedness removes the need for the hash map is the point of this variant.
- **Key insight:** sorted order means `sum < target` ⇒ must move left up, `sum > target`
  ⇒ must move right down; no candidate is ever wrongly discarded.
- **Edge cases:** exactly two elements; negative numbers; duplicates.
- **Common mistakes:** returning 0-based indices; using `<=` and crossing the pointers.
- **Follow-ups:** unsorted input → hash map (*Two Sum*); three numbers → *3Sum*.
- **Related:** Two Sum (1), 3Sum (15).
