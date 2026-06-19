# 23. Merge k Sorted Lists

https://leetcode.com/problems/merge-k-sorted-lists/

- **Difficulty:** Hard
- **Pattern:** Pairwise (divide-and-conquer) merging
- **Category:** Linked List
- **Tags:** linked-list, heap, divide-and-conquer, merge-sort

## Statement

Given an array of `k` sorted linked lists, merge them into one sorted list and return its
head.

## Signature

`mergeKLists(lists) -> ListNode | null`

> Tested via `mergeKListsArr(arrays)` taking an array of arrays.

## Constraints

- 0 ≤ k ≤ 10^4
- 0 ≤ each list length; total nodes ≤ 10^4; each list sorted ascending.

## Approach

Repeatedly merge lists in pairs (the `merge two sorted lists` routine), halving the count
each round, until one list remains. Pairing balances the work so each node is merged
O(log k) times instead of O(k). Equivalent in cost to a min-heap of the `k` heads.

## Complexity

- **Time:** O(N log k) — N total nodes, log k merge rounds.
- **Space:** O(1) extra for pairwise merging (O(k) for the heap variant), excluding output.

## Pattern

**Divide-and-conquer merge (k-way).** The signal: combine k sorted sequences. Either a
min-heap of the current heads or balanced pairwise merging gives O(N log k). The pairwise
approach reuses the two-list merge as a black box — composition over cleverness.

## Interview notes

- **Brute force → optimal:** Concatenate all and sort → O(N log N). Merging one-by-one →
  O(N·k). Pairwise / heap → O(N log k), the target.
- **Key insight:** balance the merges (pairwise) or always merge the two smallest fronts
  (heap) so no node is re-merged k times.
- **Edge cases:** empty array of lists; some lists empty; a single list; one element each.
- **Common mistakes:** merging sequentially (O(N·k)); mishandling the odd leftover list in
  a pairing round; null lists in the input.
- **Follow-ups:** min-heap implementation; external merge for streams that don't fit memory.
- **Related:** Merge Two Sorted Lists (21), Kth Largest Element in an Array (215).
