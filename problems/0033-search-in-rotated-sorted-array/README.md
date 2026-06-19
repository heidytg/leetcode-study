# 33. Search in Rotated Sorted Array

https://leetcode.com/problems/search-in-rotated-sorted-array/

- **Difficulty:** Medium
- **Pattern:** Binary search choosing the sorted half
- **Category:** Binary Search
- **Tags:** array, binary-search

## Statement

A sorted, distinct-valued array was rotated at an unknown pivot. Given `target`, return
its index or `-1`, in O(log n).

## Signature

`search(nums: number[], target: number) -> number`

## Constraints

- 1 ≤ nums.length ≤ 5000
- -10^4 ≤ nums[i], target ≤ 10^4; all unique.

## Approach

At each step one side of `mid` is fully sorted. Decide which: if `nums[lo] <= nums[mid]`,
the left half is sorted — if `target` lies within `[nums[lo], nums[mid])`, search left,
else right. Otherwise the right half is sorted — if `target` lies within
`(nums[mid], nums[hi]]`, search right, else left. Each step discards half, preserving
O(log n) despite the rotation.

## Complexity

- **Time:** O(log n).
- **Space:** O(1).

## Pattern

**Rotated binary search (identify the ordered side).** The signal: search a rotated sorted
array. Since at least one half around `mid` is always in order, test the target against
that half's known range to pick a direction. The companion to *Find Minimum in Rotated
Sorted Array* (153).

## Interview notes

- **Brute force → optimal:** Linear scan O(n). The rotated binary search keeps it
  O(log n). (Alternative: find the pivot with 153, then binary search the correct
  segment — two passes, also O(log n).)
- **Key insight:** exactly one of the two halves is sorted; use its endpoints to test
  containment.
- **Edge cases:** no rotation; target at the pivot; single element; target absent.
- **Common mistakes:** using `<` vs `<=` wrong when comparing `nums[lo]`/`nums[mid]`
  (duplicates aside, the `<=` matters when `lo == mid`); off-by-one on the range bounds.
- **Follow-ups:** duplicates allowed → (81), degrades toward O(n).
- **Related:** Find Minimum in Rotated Sorted Array (153), Binary Search (704).
