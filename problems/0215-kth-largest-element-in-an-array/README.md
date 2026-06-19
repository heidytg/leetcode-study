# 215. Kth Largest Element in an Array

https://leetcode.com/problems/kth-largest-element-in-an-array/

- **Difficulty:** Medium
- **Pattern:** Selection (quickselect / heap / sort)
- **Category:** Heap / Priority Queue
- **Tags:** array, divide-and-conquer, sorting, heap, quickselect

## Statement

Return the `k`-th largest element in an unsorted array (by value, not distinct).

## Signature

`findKthLargest(nums: number[], k: number) -> number`

## Constraints

- 1 ≤ k ≤ nums.length ≤ 10^5
- -10^4 ≤ nums[i] ≤ 10^4

## Approach

Sorting descending and indexing `k-1` is the simplest correct answer (O(n log n)). To beat
it: a min-heap of size k → O(n log k); or **quickselect** — partition around a pivot like
quicksort but recurse into only the side containing the k-th position → O(n) average.

## Complexity

- **Time:** O(n log n) sort; O(n log k) heap; O(n) average quickselect (O(n²) worst).
- **Space:** O(1) sort (in place); O(k) heap.

## Pattern

**Order-statistic selection.** The signal: find the k-th smallest/largest without fully
sorting. Quickselect is the classic O(n)-average answer; a size-k heap is the simpler
streaming-friendly alternative. Knowing all three tiers signals depth.

## Interview notes

- **Brute force → optimal:** Sort O(n log n) → heap O(n log k) → quickselect O(n) average.
  State the progression; quickselect is the "optimal."
- **Key insight:** k-th largest = index `n-k` in ascending order; quickselect only recurses
  into the relevant partition.
- **Edge cases:** k = 1 (max); k = n (min); duplicates (count by position, not distinct).
- **Common mistakes:** off-by-one between k-th largest and array index; quickselect pivot
  choice causing O(n²) (randomize).
- **Follow-ups:** implement quickselect; k-th largest in a stream (703).
- **Related:** K Closest Points to Origin (973), Kth Largest in a Stream (703).
