# 138. Copy List with Random Pointer

https://leetcode.com/problems/copy-list-with-random-pointer/

- **Difficulty:** Medium
- **Pattern:** Hash map from original node → clone
- **Category:** Linked List
- **Tags:** linked-list, hash-table

## Statement

Each node has a `next` and a `random` pointer (to any node or null). Return a **deep
copy**: new nodes whose `next`/`random` mirror the original structure.

## Signature

`copyRandomList(head) -> Node | null`

> Tested via `copyRandomListArr(data)` where each entry is `[val, randomIndex]`
> (`randomIndex` is `null` if `random` is null); the output uses the same format.

## Constraints

- 0 ≤ number of nodes ≤ 1000
- -10^4 ≤ Node.val ≤ 10^4; `random` is null or points to a node in the list.

## Approach

Two passes with a map from each original node to its clone. Pass 1: create a bare clone
for every node and record `original → clone`. Pass 2: for each original, wire its clone's
`next` and `random` by looking up the clones of the original's `next`/`random` (null maps
to null). Return the clone of the head.

## Complexity

- **Time:** O(n).
- **Space:** O(n) — the map (an O(1)-space interleaving trick exists as a follow-up).

## Pattern

**Identity map for structural copy.** The signal: duplicate a graph/structure whose
pointers cross-reference arbitrary nodes. A map from original→copy lets you translate any
pointer (even forward/backward `random` links) in O(1). Generalizes to *Clone Graph*.

## Interview notes

- **Brute force → optimal:** You can't set `random` in one pass because it may point to a
  not-yet-created node — hence the map (or the interleaving trick). The two-pass map is the
  standard O(n)/O(n) answer.
- **Key insight:** map every original node to its clone first, then translate all pointers.
- **Edge cases:** empty list; `random` pointing to self or to null; multiple nodes sharing
  a random target.
- **Common mistakes:** copying `next` but forgetting `random`; not handling null `random`;
  reusing original nodes.
- **Follow-ups:** O(1) space via interleaving clones between originals, then splitting.
- **Related:** Clone Graph (133), Linked List Cycle (141).
