# 102. Binary Tree Level Order Traversal

https://leetcode.com/problems/binary-tree-level-order-traversal/

- **Difficulty:** Medium
- **Pattern:** Breadth-first search by level
- **Category:** Trees
- **Tags:** tree, bfs, binary-tree

## Statement

Return the node values level by level, top to bottom, left to right — a list of lists, one
per depth.

## Signature

`levelOrder(root) -> number[][]`

> Tested via `levelOrderArr(vals)`.

## Constraints

- 0 ≤ number of nodes ≤ 2000
- -1000 ≤ Node.val ≤ 1000

## Approach

Standard BFS with a queue, processing one full level per outer iteration. Record the
current queue size `k`, pop exactly `k` nodes into the current level's list while enqueuing
their children, then move to the next level. The fixed per-level count is what groups nodes
by depth.

## Complexity

- **Time:** O(n).
- **Space:** O(n) — the queue holds up to a full level (~n/2 leaves).

## Pattern

**Level-batched BFS.** The signal: process a tree/graph in depth layers. Snapshot the queue
size at each level boundary so you know where one level ends. The backbone of right-side
view, zigzag traversal, and shortest-layer problems.

## Interview notes

- **Brute force → optimal:** BFS is the natural O(n) approach; a DFS that appends to
  `res[depth]` also works (carry the depth).
- **Key insight:** capture `len(queue)` before the inner loop to delimit the level.
- **Edge cases:** empty tree (`[]`); single node; very wide vs very deep trees.
- **Common mistakes:** reading the queue size inside the loop after it changes; mixing
  levels together.
- **Follow-ups:** zigzag order (103); bottom-up level order (107); right-side view (199).
- **Related:** Binary Tree Right Side View (199), Maximum Depth (104).
