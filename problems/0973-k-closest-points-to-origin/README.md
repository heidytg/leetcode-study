# 973. K Closest Points to Origin

https://leetcode.com/problems/k-closest-points-to-origin/

- **Difficulty:** Medium
- **Pattern:** Selection by distance (heap / sort / quickselect)
- **Category:** Heap / Priority Queue
- **Tags:** array, math, divide-and-conquer, sorting, heap, quickselect

## Statement

Given `points` on a plane and integer `k`, return the `k` points closest to the origin
`(0,0)` by Euclidean distance. Any order is accepted; the answer is unique up to order.

## Signature

`kClosest(points: number[][], k: number) -> number[][]`  (any order)

## Constraints

- 1 ≤ k ≤ points.length ≤ 10^4
- -10^4 ≤ xi, yi ≤ 10^4

## Approach

Compare by **squared** distance `x² + y²` (avoids floats and the monotonic sqrt). Sorting
all points by squared distance and taking the first `k` is the simplest correct method. A
max-heap of size k gives O(n log k); quickselect gives O(n) average.

## Complexity

- **Time:** O(n log n) sorting (O(n log k) heap, O(n) avg quickselect).
- **Space:** O(n) (O(k) for the heap).

## Pattern

**Top-k by a key.** The signal: select k items minimizing/maximizing a score. Three tiers —
sort (simplest), size-k heap (better when k ≪ n), quickselect (best average). Comparing by
squared distance to avoid `sqrt` is the reusable numeric trick.

## Interview notes

- **Brute force → optimal:** Sorting is O(n log n). If asked to beat it: max-heap of size k
  → O(n log k); quickselect → O(n) average (mention it for the optimal answer).
- **Key insight:** use squared distance — sqrt is monotonic and unnecessary.
- **Edge cases:** k equals n (return all); ties at the k-th distance (any valid set);
  points at the origin.
- **Common mistakes:** sorting by raw coordinates; computing sqrt (precision + cost);
  off-by-one on the slice.
- **Follow-ups:** quickselect implementation; streaming k-closest.
- **Related:** Kth Largest Element in an Array (215), Top K Frequent Elements (347).
