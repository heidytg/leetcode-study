# 261. Graph Valid Tree

https://leetcode.com/problems/graph-valid-tree/

- **Difficulty:** Medium
- **Pattern:** Union-Find tree validation
- **Category:** Graphs
- **Tags:** dfs, bfs, union-find, graph

## Statement

Given `n` nodes `0..n-1` and undirected `edges`, return `true` if they form a valid tree:
connected and acyclic.

## Signature

`validTree(n: number, edges: number[][]) -> boolean`

## Constraints

- 1 ≤ n ≤ 2000; no duplicate edges or self-loops.

## Approach

A graph on `n` nodes is a tree iff it has exactly `n-1` edges **and** is acyclic (these two
together imply connectivity). First check `edges.length == n-1`. Then Union-Find each edge: if
any edge connects two already-connected nodes, there's a cycle → not a tree. Passing both
checks means it's a valid tree.

## Complexity

- **Time:** O(n · α(n)) ≈ near-linear.
- **Space:** O(n).

## Pattern

**Tree = connected + acyclic + (n-1 edges).** The signal: validate tree structure. The
edge-count shortcut plus Union-Find cycle detection is the crisp Union-Find formulation;
DFS/BFS checking connectivity and no back-edge also works.

## Interview notes

- **Brute force → optimal:** DFS with a visited set and parent tracking is O(n+e);
  Union-Find with the edge-count check is equally clean and near-linear.
- **Key insight:** with exactly `n-1` edges, "no cycle" ⇒ "connected" — so a single cycle
  check after the count suffices.
- **Edge cases:** single node, no edges (valid); n-1 edges but disconnected + a cycle
  (caught by the cycle check); 0 edges with n>1 (count fails).
- **Common mistakes:** skipping the edge-count check (a forest with a separate cycle could
  fool a naive check); not handling the parent edge in DFS.
- **Follow-ups:** count components (323); minimum spanning tree.
- **Related:** Number of Connected Components (323), Redundant Connection (684).
