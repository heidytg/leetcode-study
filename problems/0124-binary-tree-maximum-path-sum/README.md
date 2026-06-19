# 124. Binary Tree Maximum Path Sum

https://leetcode.com/problems/binary-tree-maximum-path-sum/

- **Difficulty:** Hard
- **Pattern:** Post-order gain with a global best
- **Category:** Trees
- **Tags:** tree, dfs, dynamic-programming

## Statement

A path is any sequence of nodes connected by edges; each node appears at most once and the
path need not pass through the root. Return the maximum sum of node values along any path.

## Signature

`maxPathSum(root) -> number`

> Tested via `maxPathSumArr(vals)`.

## Constraints

- 1 ≤ number of nodes ≤ 3·10^4
- -1000 ≤ Node.val ≤ 1000

## Approach

For each node compute its **gain**: the best downward path sum starting at the node going
into one child, `node.val + max(0, gain(left), gain(right))` — clamping negative child
gains to 0 (don't take a harmful branch). While recursing, update a global best with the
best path *through* the node: `node.val + max(0, leftGain) + max(0, rightGain)` (both
branches). Return the one-branch gain upward.

## Complexity

- **Time:** O(n).
- **Space:** O(h) recursion stack.

## Pattern

**Return-one-branch, record-both.** The signal: a best-path quantity where the path can
bend at a node (use both children locally) but only one branch can extend to the parent.
Return the extendable value; track the bent (through-node) value globally. Same skeleton as
*Diameter of Binary Tree*.

## Interview notes

- **Brute force → optimal:** Trying all paths is exponential; the single post-order pass is
  O(n).
- **Key insight:** clamp negative gains to 0; the value returned upward (one branch) differs
  from the value recorded (two branches).
- **Edge cases:** all-negative values (answer is the largest single node, not 0); single
  node; a long negative chain.
- **Common mistakes:** initializing best to 0 (breaks all-negative trees — use −∞); adding
  both children to the upward return; forgetting to clamp negatives.
- **Follow-ups:** also return the path itself; path sum equal to a target (112/113).
- **Related:** Diameter of Binary Tree (543), House Robber III (337).
