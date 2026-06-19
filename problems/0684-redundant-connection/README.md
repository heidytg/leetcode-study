# 684. Redundant Connection

https://leetcode.com/problems/redundant-connection/

- **Difficulty:** Medium
- **Pattern:** Union-Find (detect the cycle-closing edge)
- **Category:** Graphs
- **Tags:** dfs, bfs, union-find, graph

## Statement

A tree of `n` nodes had one extra edge added, forming exactly one cycle. Given the edges,
return the edge that can be removed so the graph is a tree again. If multiple answers, return
the one appearing **last** in the input.

## Signature

`findRedundantConnection(edges: number[][]) -> number[]`

## Constraints

- 3 ≤ n ≤ 1000; edges form a connected graph with exactly one cycle.

## Approach

Process edges in order, unioning their endpoints with Union-Find. The first edge whose two
endpoints are **already in the same set** is the one that closes a cycle — and because we go
in input order, it's the last redundant edge. Return it.

## Complexity

- **Time:** O(n · α(n)) ≈ O(n) with path compression.
- **Space:** O(n) for the parent array.

## Pattern

**Union-Find cycle detection.** The signal: incremental connectivity / "which edge forms a
cycle." Union endpoints; a union that finds them already connected reveals the cycle edge.
The go-to structure for dynamic connectivity and Kruskal's MST.

## Interview notes

- **Brute force → optimal:** Rebuilding and DFS-checking after removing each edge is
  O(n²); Union-Find is near-linear in one pass.
- **Key insight:** the cycle-closing edge is exactly the one whose endpoints share a root
  before union; input order gives the "last" tie-break for free.
- **Edge cases:** the cycle edge being the last input edge; self-loops (not in this problem).
- **Common mistakes:** forgetting path compression (slow); sizing the parent array to n (use
  n+1 for 1-indexed nodes).
- **Follow-ups:** *Redundant Connection II* (685, directed); Kruskal's MST.
- **Related:** Number of Connected Components (323), Graph Valid Tree (261).
