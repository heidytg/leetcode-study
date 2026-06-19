# 295. Find Median from Data Stream

https://leetcode.com/problems/find-median-from-data-stream/

- **Difficulty:** Hard
- **Pattern:** Two balanced heaps (max-heap + min-heap)
- **Category:** Heap / Priority Queue
- **Tags:** two-pointers, design, sorting, heap, data-stream

## Statement

Design a structure that supports `addNum(num)` and `findMedian()` over a growing stream:
the median is the middle value (or the average of the two middle values).

## Signature

Class `MedianFinder` with `addNum(num)` and `findMedian() -> float`.

> Tested via `medianFinderOps(ops, args)`, returning only the `findMedian` results.

## Constraints

- -10^5 ≤ num ≤ 10^5; up to 5·10^4 calls; `findMedian` only after ≥ 1 `addNum`.

## Approach

Keep the lower half in a **max-heap** (`small`) and the upper half in a **min-heap**
(`large`), maintaining two invariants: every element of `small` ≤ every element of `large`,
and their sizes differ by at most 1. On `addNum`, push then rebalance across the heaps. The
median is the larger heap's top (odd total) or the average of both tops (even total).

## Complexity

- **Time:** `addNum` O(log n); `findMedian` O(1).
- **Space:** O(n).

## Pattern

**Dual heaps straddling the middle.** The signal: running median / streaming order
statistic. Split the data at the median between a max-heap (below) and min-heap (above);
rebalancing keeps both tops at the center. The canonical two-heap design.

## Interview notes

- **Brute force → optimal:** Sorting on each query is O(n log n); inserting into a sorted
  array is O(n). Two heaps give O(log n) add and O(1) median.
- **Key insight:** the two heap tops are exactly the middle element(s); keep sizes balanced
  and the cross-invariant (`max(small) ≤ min(large)`).
- **Edge cases:** single element; even vs odd count; all-equal stream; negatives.
- **Common mistakes:** forgetting to enforce the cross-heap ordering before balancing sizes;
  integer division when averaging the two middles.
- **Follow-ups:** values in a small fixed range → counting/bucket approach in O(1);
  sliding-window median.
- **Related:** Kth Largest in a Stream (703), Sliding Window Median (480).
