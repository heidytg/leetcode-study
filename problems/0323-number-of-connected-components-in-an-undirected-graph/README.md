# 323. Number of Connected Components in an Undirected Graph

https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

- **Difficulty:** Medium
- **Pattern:** Union-Find (count via successful unions)
- **Category:** Graphs
- **Tags:** dfs, bfs, union-find, graph

## Statement

Given `n` nodes labeled `0..n-1` and a list of undirected `edges`, return the number of
connected components.

## Signature

`countComponents(n: number, edges: number[][]) -> number`

## Constraints

- 1 ≤ n ≤ 2000; 0 ≤ edges.length ≤ n·(n-1)/2; no duplicate edges or self-loops.

## Approach

Start with `n` components (each node alone). Process each edge with Union-Find; whenever an
edge connects two **different** sets, merge them and decrement the count. The remaining count
is the number of components. (A DFS/BFS that floods each unvisited node, counting starts, is
equally valid.)

## Complexity

- **Time:** O((n + e) · α(n)) ≈ near-linear.
- **Space:** O(n).

## Pattern

**Union-Find component counting.** The signal: count groups under pairwise connections.
Initialize count = n; each successful union (distinct roots) reduces it by one. The cleanest
formulation of "how many islands in a node-graph."

## Interview notes

- **Brute force → optimal:** DFS/BFS flooding is O(n+e); Union-Find is near-linear and
  trivial to count. Either is acceptable.
- **Key insight:** count starts at n and drops only on a *successful* merge (different roots).
- **Edge cases:** no edges (n components); fully connected (1); isolated nodes.
- **Common mistakes:** decrementing on every edge (double-counts already-merged); missing
  path compression.
- **Follow-ups:** dynamic edge additions; *Graph Valid Tree* (261) builds on this.
- **Related:** Graph Valid Tree (261), Number of Islands (200).
