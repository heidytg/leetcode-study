# 104. Maximum Depth of Binary Tree

https://leetcode.com/problems/maximum-depth-of-binary-tree/

- **Difficulty:** Easy
- **Pattern:** Recursive height (post-order)
- **Category:** Trees
- **Tags:** tree, dfs, bfs, binary-tree

## Statement

Return the maximum depth of a binary tree — the number of nodes along the longest path
from the root down to a leaf.

## Signature

`maxDepth(root) -> number`

> Tested via `maxDepthArr(vals)` (LeetCode level-order array).

## Constraints

- 0 ≤ number of nodes ≤ 10^4
- -100 ≤ Node.val ≤ 100

## Approach

The depth of a node is `1 + max(depth(left), depth(right))`; an empty subtree has depth 0.
Recurse to the leaves and combine on the way back up.

## Complexity

- **Time:** O(n).
- **Space:** O(h) recursion stack.

## Pattern

**Post-order aggregation.** The signal: a value defined by combining children's values
(height, sum, count). Compute children first, then fold at the node. The skeleton reused
by diameter, balanced-check, and max-path-sum.

## Interview notes

- **Brute force → optimal:** This is optimal O(n); the alternative is iterative BFS counting
  levels, useful to avoid recursion depth on skewed trees.
- **Key insight:** depth folds bottom-up from null=0.
- **Edge cases:** empty tree (0); single node (1); completely skewed tree (n).
- **Common mistakes:** counting edges instead of nodes; off-by-one at the base case.
- **Follow-ups:** minimum depth (111) differs subtly (a node with one child isn't a leaf).
- **Related:** Balanced Binary Tree (110), Diameter of Binary Tree (543).
