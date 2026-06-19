# 226. Invert Binary Tree

https://leetcode.com/problems/invert-binary-tree/

- **Difficulty:** Easy
- **Pattern:** Recursive tree traversal (swap children)
- **Category:** Trees
- **Tags:** tree, dfs, bfs, binary-tree

## Statement

Invert a binary tree: swap the left and right child of every node. Return the root.

## Signature

`invertTree(root) -> TreeNode | null`

> Tested via `invertTreeArr(vals)` using LeetCode level-order arrays (`null` for missing
> nodes); the result is serialized back to the same format.

## Constraints

- 0 ≤ number of nodes ≤ 100
- -100 ≤ Node.val ≤ 100

## Approach

Recurse: invert the left and right subtrees, then swap them at the current node. The base
case (null) returns null. A post-order or pre-order swap both work since the swap is local.

## Complexity

- **Time:** O(n) — visit each node once.
- **Space:** O(h) recursion stack (h = height; O(n) worst case, O(log n) balanced).

## Pattern

**Structural recursion on a tree.** The signal: transform a tree where each node's result
depends only on its subtrees. Solve children recursively, combine at the node. The simplest
instance of the tree-DFS template behind most tree problems.

## Interview notes

- **Brute force → optimal:** This *is* the optimal; the variants are recursive vs iterative
  (BFS/DFS with an explicit stack/queue) — mention you can do it iteratively to avoid stack
  depth.
- **Key insight:** the swap is a local operation; recursion handles the rest.
- **Edge cases:** empty tree; single node; skewed tree (deep recursion).
- **Common mistakes:** swapping after recursing into already-swapped children inconsistently
  (save references first); forgetting the null base case.
- **Follow-ups:** iterative BFS version; check if a tree is symmetric (101).
- **Related:** Maximum Depth of Binary Tree (104), Symmetric Tree (101).
