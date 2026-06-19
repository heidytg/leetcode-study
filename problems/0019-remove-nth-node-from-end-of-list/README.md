# 19. Remove Nth Node From End of List

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

- **Difficulty:** Medium
- **Pattern:** Two pointers with a fixed gap (one pass)
- **Category:** Linked List
- **Tags:** linked-list, two-pointers

## Statement

Given the head of a linked list, remove the `n`-th node from the end and return the head.

## Signature

`removeNthFromEnd(head, n) -> ListNode | null`

> Tested via `removeNthFromEndArr(vals, n)`.

## Constraints

- 1 ≤ number of nodes ≤ 30
- 1 ≤ n ≤ number of nodes

## Approach

Use a dummy head (so removing the first node isn't a special case). Advance a `fast`
pointer `n` steps ahead, then move `fast` and `slow` together until `fast` reaches the
last node. Now `slow` sits just before the target, so `slow.next = slow.next.next`
unlinks it. One pass, no length precomputation.

## Complexity

- **Time:** O(n) — single pass.
- **Space:** O(1).

## Pattern

**Fixed-gap two pointers.** The signal: locate a node a known offset from the end in one
pass. Maintaining a constant lead between two pointers converts "from the end" into "from
the current position" without a length pass. Reused for n-th-from-end variants.

## Interview notes

- **Brute force → optimal:** Compute length, then walk `len - n` — two passes. The
  gap-pointer trick does it in one pass.
- **Key insight:** the dummy head removes the head-deletion edge case; stop `fast` at the
  last node so `slow` lands on the predecessor.
- **Edge cases:** removing the head (`n == length`); single-node list; removing the last
  node.
- **Common mistakes:** off-by-one in how far `fast` advances; not using a dummy (breaks
  when deleting the head).
- **Follow-ups:** do it knowing the list is doubly linked; n-th from end without dummy.
- **Related:** Linked List Cycle (141), Middle of the Linked List (876).
