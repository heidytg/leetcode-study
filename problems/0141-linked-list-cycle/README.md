# 141. Linked List Cycle

https://leetcode.com/problems/linked-list-cycle/

- **Difficulty:** Easy
- **Pattern:** Floyd's tortoise & hare (fast/slow pointers)
- **Category:** Linked List
- **Tags:** linked-list, two-pointers, hash-table

## Statement

Return `true` if the linked list has a cycle. (On LeetCode the cycle is given via a `pos`
index where the tail connects, or `-1` for no cycle — `pos` is not passed to the function.)

## Signature

`hasCycle(head) -> boolean`

> Tested via `hasCycleArr(vals, pos)`, which builds a list whose tail links back to index
> `pos` (or no cycle when `pos == -1`).

## Constraints

- 0 ≤ number of nodes ≤ 10^4
- -10^5 ≤ Node.val ≤ 10^5
- `pos` is -1 or a valid index.

## Approach

Move a slow pointer one step and a fast pointer two steps per iteration. If the list is
acyclic, `fast` reaches the end. If there's a cycle, `fast` laps the loop and eventually
lands on `slow`. When `slow == fast`, a cycle exists.

## Complexity

- **Time:** O(n) — fast catches slow within one loop traversal.
- **Space:** O(1) — no hash set needed.

## Pattern

**Floyd's cycle detection.** The signal: detect (or locate) a cycle in a sequence with
O(1) space. Two speeds guarantee a meeting inside any loop. The same machinery finds the
cycle's *entry* (Find the Duplicate Number) and the list midpoint.

## Interview notes

- **Brute force → optimal:** A visited hash set is O(n) time / O(n) space. Tortoise & hare
  is O(n)/O(1) — the expected upgrade.
- **Key insight:** unequal step speeds force a collision inside a cycle; no collision means
  no cycle.
- **Edge cases:** empty list; single node with/without a self-loop; cycle covering the
  whole list.
- **Common mistakes:** checking `slow == fast` before advancing (they start equal — false
  positive); not guarding `fast.next` before `fast.next.next`.
- **Follow-ups:** return the cycle's entry node (142); cycle length.
- **Related:** Find the Duplicate Number (287), Linked List Cycle II (142).
