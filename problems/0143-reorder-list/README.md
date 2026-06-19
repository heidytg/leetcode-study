# 143. Reorder List

https://leetcode.com/problems/reorder-list/

- **Difficulty:** Medium
- **Pattern:** Find middle + reverse second half + merge
- **Category:** Linked List
- **Tags:** linked-list, two-pointers, stack

## Statement

Reorder a list `L0 → L1 → … → Ln-1 → Ln` in place to
`L0 → Ln → L1 → Ln-1 → L2 → …`. Only node links may change, not values.

## Signature

`reorderList(head) -> None`  (modifies in place)

> Tested via `reorderListArr(vals)` which reorders and returns the resulting values.

## Constraints

- 1 ≤ number of nodes ≤ 5·10^4
- 1 ≤ Node.val ≤ 1000

## Approach

Three classic sub-steps: (1) find the middle with slow/fast pointers; (2) reverse the
second half in place; (3) merge the two halves, alternating one node from the front and
one from the reversed back. Splitting the list at the middle (`slow.next = None`) keeps
the two halves disjoint before merging.

## Complexity

- **Time:** O(n).
- **Space:** O(1).

## Pattern

**Compose list primitives.** The signal: a reordering that decomposes into find-middle +
reverse + merge — each an O(1)-space primitive you already know. Recognizing a hard list
problem as a pipeline of standard moves is the meta-skill.

## Interview notes

- **Brute force → optimal:** Storing nodes in an array and re-linking by index is
  O(n)/O(n). The middle+reverse+merge approach is O(1) space.
- **Key insight:** reverse only the second half, then interleave; cut the list at the
  middle so halves don't overlap.
- **Edge cases:** one or two nodes (already reordered); even vs odd length (middle
  selection).
- **Common mistakes:** not severing `slow.next`; wrong slow/fast termination causing an
  off-by-one middle; losing `next` pointers during the merge.
- **Follow-ups:** do it recursively; rotate list (61).
- **Related:** Reverse Linked List (206), Middle of the Linked List (876).
