# 4. Median of Two Sorted Arrays

https://leetcode.com/problems/median-of-two-sorted-arrays/

- **Difficulty:** Hard
- **Pattern:** Binary search for a balanced partition
- **Category:** Binary Search
- **Tags:** array, binary-search, divide-and-conquer

## Statement

Given two sorted arrays `nums1` and `nums2`, return the median of their combined sorted
order. Must run in O(log(m+n)).

## Signature

`findMedianSortedArrays(nums1: number[], nums2: number[]) -> number`

## Constraints

- 0 ≤ m, n ≤ 1000; 1 ≤ m + n
- -10^6 ≤ nums[i] ≤ 10^6

## Approach

Binary search a partition of the **smaller** array. Choose `i` elements from `A` and
`j = half - i` from `B` so the left side holds exactly half of all elements. The partition
is correct when `Aleft ≤ Bright` and `Bleft ≤ Aright` — every left element ≤ every right
element. Use ±∞ sentinels for out-of-range edges. The median is then `max(left ends)` for
odd total, or the average of `max(left ends)` and `min(right ends)` for even. Adjust `i`
left/right based on which cross-condition fails.

## Complexity

- **Time:** O(log(min(m, n))).
- **Space:** O(1).

## Pattern

**Binary search on a partition.** The signal: an order statistic across two sorted inputs
under a log constraint. Instead of merging, binary search *where to cut* so the left
collection is the correct size and ordered relative to the right. A high-leverage,
notoriously fiddly technique — getting the sentinels and parity right is the skill.

## Interview notes

- **Brute force → optimal:** Merging is O(m+n); a k-th element by repeated halving is
  O(log(m+n)); the partition search is O(log(min(m,n))) — the strongest and what "must run
  in O(log(m+n))" is asking for.
- **Key insight:** searching the partition index of the smaller array bounds the work;
  ±∞ sentinels remove all the empty-side special-casing.
- **Edge cases:** one array empty; very different sizes; even vs odd total length;
  duplicate values straddling the cut.
- **Common mistakes:** binary searching the larger array (worse bound / index range bugs);
  wrong `half = (m+n+1)/2` parity; missing ±∞ guards; integer vs float result.
- **Follow-ups:** k-th smallest of two sorted arrays (same idea, target rank k).
- **Related:** Binary Search (704), Find Minimum in Rotated Sorted Array (153).
