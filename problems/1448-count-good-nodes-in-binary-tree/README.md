# 1448. Count Good Nodes in Binary Tree

https://leetcode.com/problems/count-good-nodes-in-binary-tree/

- **Difficulty:** Medium
- **Pattern:** DFS carrying path state (max so far)
- **Category:** Trees
- **Tags:** tree, dfs, bfs, binary-tree

## Statement

A node is **good** if no node on the path from the root to it has a strictly greater
value. Return the number of good nodes.

## Signature

`goodNodes(root) -> number`

> Tested via `goodNodesArr(vals)`.

## Constraints

- 1 ≤ number of nodes ≤ 10^5
- -10^4 ≤ Node.val ≤ 10^4

## Approach

DFS down the tree threading the maximum value seen so far on the current path. A node is
good when its value is `≥ maxSoFar`. Update `maxSoFar` as you descend and sum the good
counts from both subtrees. Start with `-∞` so the root is always good.

## Complexity

- **Time:** O(n).
- **Space:** O(h) recursion stack.

## Pattern

**Top-down DFS with inherited state.** The signal: a node's status depends on the *path*
from the root, not just its subtrees. Pass the accumulated path info (here the running max)
down as a parameter — contrast with post-order problems that combine info coming up.

## Interview notes

- **Brute force → optimal:** Recomputing the path max for each node is O(n·h). Threading
  `maxSoFar` down makes it a single O(n) pass.
- **Key insight:** "good" uses `≥` (ties count); state flows downward, counts flow upward.
- **Edge cases:** single node (always good = 1); strictly decreasing path (only the root is
  good); equal values along a path (all good).
- **Common mistakes:** using `>` instead of `≥`; resetting the max incorrectly across
  siblings (each branch inherits the parent's max independently).
- **Follow-ups:** count nodes that are the min on their path; longest increasing path.
- **Related:** Maximum Depth (104), Binary Tree Maximum Path Sum (124).
