# 199. Binary Tree Right Side View

https://leetcode.com/problems/binary-tree-right-side-view/

- **Difficulty:** Medium
- **Pattern:** Level-order BFS, take the last node per level
- **Category:** Trees
- **Tags:** tree, bfs, dfs, binary-tree

## Statement

Imagine standing to the right of the tree. Return the values of the nodes visible from
top to bottom — the rightmost node at each depth.

## Signature

`rightSideView(root) -> number[]`

> Tested via `rightSideViewArr(vals)`.

## Constraints

- 0 ≤ number of nodes ≤ 100
- -100 ≤ Node.val ≤ 100

## Approach

Run a level-order BFS; the **last** node dequeued at each level is the one visible from the
right, so append it to the result. (Equivalently, a DFS that visits right before left and
records the first node seen at each new depth.)

## Complexity

- **Time:** O(n).
- **Space:** O(n) — the BFS queue (or O(h) for the DFS variant).

## Pattern

**Per-level selection.** The signal: pick one representative per depth (rightmost,
leftmost, max). Reuse level-batched BFS and select within each level — here, the last
element. A direct specialization of level-order traversal.

## Interview notes

- **Brute force → optimal:** BFS taking the last per level is O(n); the right-first DFS
  recording the first node at each new depth is the elegant O(n)/O(h) alternative.
- **Key insight:** "visible from the right" = last node in each BFS level (not just the
  right children — a left child can be rightmost if the right subtree is missing).
- **Edge cases:** empty tree; left-only tree (every node is visible); single node.
- **Common mistakes:** collecting only right children (misses visible left nodes); reading
  level size after the queue mutates.
- **Follow-ups:** left side view; boundary of the tree (545).
- **Related:** Binary Tree Level Order Traversal (102), Maximum Depth (104).
