# 543. Diameter of Binary Tree

https://leetcode.com/problems/diameter-of-binary-tree/

- **Difficulty:** Easy
- **Pattern:** Post-order height with a side-effect maximum
- **Category:** Trees
- **Tags:** tree, dfs, binary-tree

## Statement

Return the length of the longest path between any two nodes (measured in **edges**). The
path need not pass through the root.

## Signature

`diameterOfBinaryTree(root) -> number`

> Tested via `diameterOfBinaryTreeArr(vals)`.

## Constraints

- 1 ≤ number of nodes ≤ 10^4
- -100 ≤ Node.val ≤ 100

## Approach

For each node, the longest path *through* it equals `leftHeight + rightHeight` (in edges).
Run a single post-order recursion that returns each node's height while updating a global
maximum with `left + right`. One traversal computes both.

## Complexity

- **Time:** O(n).
- **Space:** O(h) recursion stack.

## Pattern

**Height recursion + global best.** The signal: a "longest path / best combine" quantity
that's evaluated at every node but returned differently than what you propagate upward.
Return the height; record the through-node combination as a side effect. Same shape as
Binary Tree Maximum Path Sum.

## Interview notes

- **Brute force → optimal:** Computing height separately for every node is O(n²); folding
  the diameter update into one height pass is O(n).
- **Key insight:** what you *return* (height) differs from what you *track* (left+right).
- **Edge cases:** single node (diameter 0); skewed tree; the longest path avoiding the root.
- **Common mistakes:** counting nodes instead of edges; returning the diameter from the
  recursion instead of the height.
- **Follow-ups:** diameter with edge weights; N-ary tree diameter.
- **Related:** Maximum Depth (104), Binary Tree Maximum Path Sum (124).
