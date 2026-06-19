# 25. Reverse Nodes in k-Group

https://leetcode.com/problems/reverse-nodes-in-k-group/

- **Difficulty:** Hard
- **Pattern:** Group-wise in-place reversal
- **Category:** Linked List
- **Tags:** linked-list, recursion

## Statement

Reverse the nodes of the list `k` at a time and return the modified list. Nodes in a
final group of fewer than `k` are left as-is. Only node links may change.

## Signature

`reverseKGroup(head, k) -> ListNode | null`

> Tested via `reverseKGroupArr(vals, k)`.

## Constraints

- 1 ≤ k ≤ number of nodes ≤ 5000
- 0 ≤ Node.val ≤ 1000

## Approach

First check whether `k` more nodes exist; if not, leave this tail unchanged. Otherwise
recurse on the node after the group to get the already-processed remainder, then reverse
this group of `k`, pointing the group's nodes backward and attaching the group's tail to
that processed remainder. The recursion stitches groups together from the back.

## Complexity

- **Time:** O(n) — each node is visited a constant number of times.
- **Space:** O(n / k) recursion depth (an iterative version is O(1) space).

## Pattern

**Segmented reversal.** The signal: apply a known list transform (reverse) to fixed-size
windows. The reusable moves: count-ahead to verify a full group, reverse exactly `k`
links, and reconnect to the recursively built tail. Generalizes *Reverse Linked List* to
chunks.

## Interview notes

- **Brute force → optimal:** Copying to an array, reversing slices, rebuilding is
  O(n)/O(n). In-place group reversal is O(1) extra space iteratively.
- **Key insight:** verify `k` nodes remain *before* reversing so the short final group is
  untouched; reconnect each group's tail to the processed remainder.
- **Edge cases:** `k == 1` (unchanged); length not a multiple of `k` (tail remainder);
  `k == length` (single full reverse).
- **Common mistakes:** reversing a partial final group; losing the connection between
  groups; off-by-one in the count-ahead.
- **Follow-ups:** iterative O(1)-space version; *Swap Nodes in Pairs* (24) is `k = 2`.
- **Related:** Reverse Linked List (206), Swap Nodes in Pairs (24).
