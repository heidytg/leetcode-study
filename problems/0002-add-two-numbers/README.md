# 2. Add Two Numbers

https://leetcode.com/problems/add-two-numbers/

- **Difficulty:** Medium
- **Pattern:** Elementwise traversal with carry
- **Category:** Linked List
- **Tags:** linked-list, math, recursion

## Statement

Two non-empty lists represent non-negative integers with digits stored in **reverse**
order, one digit per node. Add the two numbers and return the sum as a list in the same
reverse-digit form.

## Signature

`addTwoNumbers(l1, l2) -> ListNode | null`

> Tested via `addTwoNumbersArr(a, b)`.

## Constraints

- 1 ≤ each list length ≤ 100
- 0 ≤ Node.val ≤ 9; no leading zeros except the number 0 itself.

## Approach

Walk both lists together with a `carry`. At each step sum the available digits plus carry,
push `sum % 10` as a new node, and keep `sum // 10` as the next carry. Continue while
either list has nodes **or** a carry remains — that final carry condition handles sums
that grow an extra digit (e.g. `999 + 1`). A dummy head simplifies building the result.

## Complexity

- **Time:** O(max(m, n)).
- **Space:** O(max(m, n)) for the result list.

## Pattern

**Digit-by-digit carry propagation.** The signal: arithmetic on numbers represented as
sequences. Reverse-order storage means you process least-significant digits first, so the
carry flows naturally forward. The "loop while a carry remains" guard is the reusable
detail.

## Interview notes

- **Brute force → optimal:** Converting lists to integers, adding, and rebuilding fails
  for very long lists (overflow); the digit-wise walk is O(n) and overflow-free.
- **Key insight:** the loop condition includes `carry` so a trailing carry isn't dropped.
- **Edge cases:** different lengths; a final carry growing the result; both `[0]`.
- **Common mistakes:** stopping when one list ends; forgetting the last carry node;
  advancing a null pointer.
- **Follow-ups:** digits in forward order → reverse first or use stacks (445).
- **Related:** Merge Two Sorted Lists (21), Add Two Numbers II (445).
