# 110. Balanced Binary Tree

https://leetcode.com/problems/balanced-binary-tree/

- **Difficulty:** Easy
- **Pattern:** Post-order height with early-exit sentinel
- **Category:** Trees
- **Tags:** tree, dfs, binary-tree

## Statement

Return `true` if the tree is height-balanced: for every node, the heights of its two
subtrees differ by at most 1.

## Signature

`isBalanced(root) -> boolean`

> Tested via `isBalancedArr(vals)`.

## Constraints

- 0 ≤ number of nodes ≤ 5000
- -10^4 ≤ Node.val ≤ 10^4

## Approach

A single post-order recursion returns each subtree's height, but uses a sentinel `-1` to
mean "already unbalanced." At each node, if either child returns `-1`, or their heights
differ by more than 1, propagate `-1`. The tree is balanced iff the root doesn't return
`-1`. This avoids recomputing heights repeatedly.

## Complexity

- **Time:** O(n) — each node visited once.
- **Space:** O(h) recursion stack.

## Pattern

**Bottom-up with a failure sentinel.** The signal: a global property that can fail early
during a height/aggregate pass. Encode "failed" in the return value (`-1`) so one traversal
both computes heights and detects violation — beating the naive height-per-node approach.

## Interview notes

- **Brute force → optimal:** Calling a separate `height()` at every node is O(n²). Folding
  the balance check into one post-order pass with the `-1` sentinel is O(n).
- **Key insight:** propagate `-1` upward to short-circuit once any subtree is unbalanced.
- **Edge cases:** empty tree (balanced); single node; perfectly skewed (unbalanced beyond
  depth 1).
- **Common mistakes:** the O(n²) double recursion; comparing node counts instead of heights.
- **Follow-ups:** return the actual unbalanced node; check balance for an AVL insertion.
- **Related:** Maximum Depth (104), Diameter of Binary Tree (543).
