# 704. Binary Search

https://leetcode.com/problems/binary-search/

- **Difficulty:** Easy
- **Pattern:** Classic binary search on a sorted array
- **Category:** Binary Search
- **Tags:** array, binary-search

## Statement

Given a sorted (ascending) array `nums` of distinct integers and a `target`, return its
index, or `-1` if absent. Must run in O(log n).

## Signature

`search(nums: number[], target: number) -> number`

## Constraints

- 1 ≤ nums.length ≤ 10^4
- -10^4 ≤ nums[i], target ≤ 10^4; all distinct, ascending.

## Approach

Maintain an inclusive search range `[lo, hi]`. Look at the middle element: if it equals
the target, return `mid`; if it's smaller, the answer must be to the right (`lo = mid+1`);
otherwise to the left (`hi = mid-1`). Halving the range each step gives O(log n). Compute
`mid` as `lo + (hi-lo)/2` to avoid overflow in fixed-width languages.

## Complexity

- **Time:** O(log n).
- **Space:** O(1).

## Pattern

**Binary search on a monotonic predicate.** The signal: a sorted/monotonic search space
where each probe lets you discard half. The `[lo, hi]` inclusive template (`while lo <=
hi`) is the canonical form; mastering the boundary updates here is the basis for every
other problem in this category.

## Interview notes

- **Brute force → optimal:** Linear scan is O(n); binary search is O(log n) and is the
  whole point.
- **Key insight:** keep the loop invariant crisp — the target, if present, always lies in
  `[lo, hi]`.
- **Edge cases:** single element; target smaller/larger than all elements; empty array.
- **Common mistakes:** `(lo+hi)/2` overflow in languages with fixed ints; using `lo < hi`
  with inclusive `hi` (off-by-one); forgetting `mid±1` (infinite loop).
- **Follow-ups:** leftmost/rightmost insertion point (`bisect`/`lower_bound`); search on
  the answer space (see Koko Eating Bananas).
- **Related:** Search in Rotated Sorted Array (33), Search a 2D Matrix (74).
