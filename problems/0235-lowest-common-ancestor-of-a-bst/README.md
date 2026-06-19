# 235. Lowest Common Ancestor of a Binary Search Tree

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

- **Difficulty:** Medium
- **Pattern:** BST-guided descent
- **Category:** Trees
- **Tags:** tree, bst, dfs

## Statement

Given a BST and two values `p` and `q` present in it, return the value of their lowest
common ancestor (the deepest node that has both as descendants; a node is a descendant of
itself).

## Signature

`lowestCommonAncestor(root, p, q) -> TreeNode`

> Tested via `lcaArr(vals, p, q)` returning the LCA's value.

## Constraints

- 2 ≤ number of nodes ≤ 10^5
- All Node.val are unique; `p != q`; both exist in the BST.

## Approach

Use the BST ordering. Starting at the root: if both `p` and `q` are greater than the
current value, the LCA lies in the right subtree; if both are smaller, go left. The first
node where they diverge (one ≤ node ≤ other, or the node equals one of them) is the LCA.
No recursion or extra storage needed.

## Complexity

- **Time:** O(h) — one root-to-LCA descent (O(log n) balanced, O(n) skewed).
- **Space:** O(1) iterative.

## Pattern

**Exploit the BST invariant.** The signal: a query on a BST where the ordering tells you
which subtree to descend. Comparing the targets to the current value prunes one side each
step — the same logic as BST search/insert. (For a general binary tree, LCA needs a full
recursive search instead.)

## Interview notes

- **Brute force → optimal:** The general-tree LCA (recurse both sides) is O(n). Using the
  BST property drops it to O(h) and O(1) space — make sure to use the ordering.
- **Key insight:** split point = where `p` and `q` fall on opposite sides (or one equals
  the node).
- **Edge cases:** one value is an ancestor of the other; LCA is the root; adjacent values.
- **Common mistakes:** writing the general-tree solution and ignoring the BST property;
  strict vs non-strict comparison when a target equals the node.
- **Follow-ups:** LCA in a general binary tree (236); LCA with parent pointers.
- **Related:** Lowest Common Ancestor of a Binary Tree (236), Validate BST (98).
