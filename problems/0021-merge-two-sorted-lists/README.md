# 21. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/

- **Difficulty:** Easy
- **Pattern:** Two-pointer merge with a dummy head
- **Category:** Linked List
- **Tags:** linked-list, recursion

## Statement

Merge two sorted linked lists into one sorted list by splicing the nodes together.
Return the head of the merged list.

## Signature

`mergeTwoLists(l1, l2) -> ListNode | null`

> Tested via the array adapter `mergeTwoListsArr(a, b)`.

## Constraints

- 0 ≤ each list length ≤ 50
- -100 ≤ Node.val ≤ 100; both lists sorted ascending.

## Approach

Use a dummy head node so there's no special case for the first element. Keep a `tail`
pointer; repeatedly attach whichever of `l1`/`l2` has the smaller value and advance that
list. When one list runs out, attach the remainder of the other. Return `dummy.next`.

## Complexity

- **Time:** O(m + n).
- **Space:** O(1) — splices existing nodes; no new ones (besides the dummy).

## Pattern

**Dummy-head merge.** The signal: build a list by appending in order. A sentinel dummy
head removes the "is this the first node?" branch, and a `tail` pointer makes each append
O(1). Foundation for merge-sort on lists and *Merge k Sorted Lists*.

## Interview notes

- **Brute force → optimal:** Collecting all values, sorting, and rebuilding is
  O((m+n)log(m+n)). The linear splice merge is O(m+n) and reuses nodes.
- **Key insight:** the dummy head; attach the remaining list in one step at the end.
- **Edge cases:** one or both lists empty; all of one list smaller than the other; equal
  values (use `<=` for stability).
- **Common mistakes:** forgetting to attach the leftover tail; not advancing `tail`.
- **Follow-ups:** k lists → *Merge k Sorted Lists* (23); recursive merge.
- **Related:** Merge k Sorted Lists (23), Reverse Linked List (206).
