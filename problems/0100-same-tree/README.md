# 100. Same Tree

https://leetcode.com/problems/same-tree/

- **Difficulty:** Easy
- **Pattern:** Simultaneous two-tree recursion
- **Category:** Trees
- **Tags:** tree, dfs, bfs, binary-tree

## Statement

Given the roots of two binary trees `p` and `q`, return `true` if they are structurally
identical and every corresponding node has the same value.

## Signature

`isSameTree(p, q) -> boolean`

> Tested via `isSameTreeArr(pVals, qVals)`.

## Constraints

- 0 ≤ nodes in each tree ≤ 100
- -10^4 ≤ Node.val ≤ 10^4

## Approach

Recurse on both trees in lockstep. If both nodes are null, they match here. If exactly one
is null, or their values differ, they don't. Otherwise both subtrees must match. Combine
with logical AND.

## Complexity

- **Time:** O(min(m, n)) — stops at the first mismatch.
- **Space:** O(min height) recursion stack.

## Pattern

**Parallel tree traversal.** The signal: compare/combine two trees position-by-position.
Advance both recursions together and short-circuit on any structural or value mismatch.
The building block for *Subtree of Another Tree* and *Symmetric Tree*.

## Interview notes

- **Brute force → optimal:** This is already O(n); the variants are recursive vs iterative
  (paired stack/queue).
- **Key insight:** handle the three null cases (both, one, neither) before comparing values.
- **Edge cases:** both empty (equal); one empty; same values but different shape.
- **Common mistakes:** comparing values before the null checks (null dereference); treating
  same multiset of values as "same tree" (structure matters).
- **Follow-ups:** symmetric tree (101 — compare a tree with its mirror); subtree check (572).
- **Related:** Subtree of Another Tree (572), Symmetric Tree (101).
