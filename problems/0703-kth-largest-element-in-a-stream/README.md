# 703. Kth Largest Element in a Stream

https://leetcode.com/problems/kth-largest-element-in-a-stream/

- **Difficulty:** Easy
- **Pattern:** Size-k min-heap
- **Category:** Heap / Priority Queue
- **Tags:** tree, design, bst, heap, data-stream

## Statement

Design a class initialized with `k` and a stream of numbers. `add(val)` adds a value and
returns the `k`-th largest element seen so far.

## Signature

Class `KthLargest(k, nums)` with `add(val) -> int`.

> Tested via `kthLargestOps(ops, args)` (`null` for the constructor).

## Constraints

- 1 ≤ k ≤ 10^4; up to 10^4 `add` calls; the answer always exists.

## Approach

Keep a **min-heap of the k largest values seen**. The heap's root is the k-th largest.
On `add`, push the value; if the heap exceeds size `k`, pop the smallest. The root is the
answer. Maintaining only k elements keeps each operation O(log k).

## Complexity

- **Time:** O(log k) per `add`; O(n log k) to build from n initial numbers.
- **Space:** O(k).

## Pattern

**Bounded heap for streaming top-k.** The signal: maintain the k-th largest/smallest over a
growing stream. A min-heap capped at size k discards everything below the threshold, so the
root is always the answer — the streaming counterpart of *Kth Largest in an Array*.

## Interview notes

- **Brute force → optimal:** Re-sorting on each `add` is O(n log n) per call. The size-k
  min-heap is O(log k).
- **Key insight:** for the k-th *largest*, keep a *min*-heap of size k (root = answer).
- **Edge cases:** initial `nums` longer/shorter than k; duplicate values; k = 1 (running
  max).
- **Common mistakes:** using a max-heap (then the root isn't the k-th largest); not trimming
  to size k.
- **Follow-ups:** k-th smallest (use a max-heap); sliding-window k-th largest.
- **Related:** Kth Largest Element in an Array (215), Find Median from Data Stream (295).
