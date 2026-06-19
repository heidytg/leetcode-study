# 153. Find Minimum in Rotated Sorted Array

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

- **Difficulty:** Medium
- **Pattern:** Binary search on a rotated array (compare to right end)
- **Category:** Binary Search
- **Tags:** array, binary-search

## Statement

A sorted array of distinct integers was rotated 1..n times. Return its minimum element in
O(log n).

## Signature

`findMin(nums: number[]) -> number`

## Constraints

- 1 ≤ nums.length ≤ 5000
- -5000 ≤ nums[i] ≤ 5000; all unique; the array is a rotation of an ascending sort.

## Approach

The minimum is the single "pivot" where order wraps. Compare `nums[mid]` to `nums[hi]`:
if `nums[mid] > nums[hi]`, the rotation point (and thus the min) is strictly to the right,
so `lo = mid + 1`; otherwise the min is at `mid` or to its left, so `hi = mid`. The loop
`while lo < hi` converges `lo` onto the minimum. Comparing against the right end (not the
left) handles the non-rotated case cleanly.

## Complexity

- **Time:** O(log n).
- **Space:** O(1).

## Pattern

**Binary search by which half is sorted.** The signal: a sorted array disturbed by a
rotation. A `mid`-vs-endpoint comparison reveals which side holds the discontinuity, so
you can still discard half each step. The same comparison underlies searching a rotated
array (33).

## Interview notes

- **Brute force → optimal:** Linear scan is O(n); the pivot binary search is O(log n).
- **Key insight:** compare to `nums[hi]` — `nums[mid] > nums[hi]` means the min is to the
  right; never compare to `nums[lo]` here (it misreads the already-sorted case).
- **Edge cases:** no rotation (`[1,2,3]` → first element); two elements; rotation by n
  (full cycle).
- **Common mistakes:** `lo <= hi` with `hi = mid` (infinite loop — use `lo < hi`);
  comparing against the left boundary.
- **Follow-ups:** duplicates allowed → (154), worst case O(n); find the rotation count.
- **Related:** Search in Rotated Sorted Array (33), Binary Search (704).
