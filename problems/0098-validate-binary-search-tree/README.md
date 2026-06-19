# 98. Validate Binary Search Tree

https://leetcode.com/problems/validate-binary-search-tree/

- **Difficulty:** Medium
- **Pattern:** DFS with (low, high) value bounds
- **Category:** Trees
- **Tags:** tree, dfs, bst, binary-tree

## Statement

Return `true` if the tree is a valid BST: every node's left subtree contains only smaller
values, its right subtree only larger values, and both subtrees are themselves valid BSTs.

## Signature

`isValidBST(root) -> boolean`

> Tested via `isValidBSTArr(vals)`.

## Constraints

- 1 ≤ number of nodes ≤ 10^4
- -2^31 ≤ Node.val ≤ 2^31 - 1

## Approach

Recurse with an open interval `(low, high)` of allowed values, starting `(-∞, +∞)`. A node
must satisfy `low < val < high`. Descending left tightens the upper bound to the node's
value; descending right tightens the lower bound. A purely local parent-child comparison is
insufficient — a deep descendant can violate an ancestor's bound.

## Complexity

- **Time:** O(n).
- **Space:** O(h) recursion stack.

## Pattern

**Range-constrained DFS.** The signal: validate a global ordering invariant that spans
multiple levels. Carry the permissible value window down and tighten it per branch. The
inorder-traversal-is-increasing check is an equivalent alternative.

## Interview notes

- **Brute force → optimal:** Both the bounds DFS and the "inorder must be strictly
  increasing" approaches are O(n). The bounds method short-circuits on the first violation.
- **Key insight:** bounds, not just parent comparisons — `left.right` can be valid vs its
  parent yet invalid vs its grandparent.
- **Edge cases:** duplicate values (invalid — strict inequality); values at int32 extremes
  (use unbounded sentinels, not fixed ints); single node.
- **Common mistakes:** comparing only node vs its children; using `≤`/`≥` (BST here is
  strict); integer overflow with fixed sentinel bounds.
- **Follow-ups:** inorder iterative validation; recover a BST with two swapped nodes (99).
- **Related:** Kth Smallest Element in a BST (230), LCA of a BST (235).
