# 206. Reverse Linked List

https://leetcode.com/problems/reverse-linked-list/

- **Difficulty:** Easy
- **Pattern:** Iterative pointer reversal (prev / cur / next)
- **Category:** Linked List
- **Tags:** linked-list, recursion

## Statement

Reverse a singly linked list and return the new head.

## Signature

`reverseList(head: ListNode | null) -> ListNode | null`

> Tested via the array adapter `reverseListArr(vals)` which builds a list, reverses it,
> and returns the values as an array.

## Constraints

- 0 ≤ number of nodes ≤ 5000
- -5000 ≤ Node.val ≤ 5000

## Approach

Walk the list carrying three pointers: `prev`, `cur`, and a saved `next`. Each step,
remember `cur.next`, point `cur.next` back to `prev`, then advance `prev` and `cur`
forward. When `cur` falls off the end, `prev` is the new head.

## Complexity

- **Time:** O(n).
- **Space:** O(1) iterative (O(n) call stack if done recursively).

## Pattern

**In-place pointer relinking.** The signal: restructure a linked list without extra
storage. The save-next → relink → advance trio is the fundamental linked-list maneuver
reused by reorder, k-group reversal, and cycle manipulation.

## Interview notes

- **Brute force → optimal:** Copying values into an array and rebuilding is O(n)/O(n);
  in-place reversal is O(1) space — state both.
- **Key insight:** save `next` *before* you overwrite `cur.next`, or you lose the rest of
  the list.
- **Edge cases:** empty list; single node; two nodes.
- **Common mistakes:** not saving `next`; returning `cur`/`head` instead of `prev`.
- **Follow-ups:** recursive version; reverse a sublist (92); reverse in k-groups (25).
- **Related:** Reorder List (143), Reverse Nodes in k-Group (25).
