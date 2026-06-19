# 1584. Min Cost to Connect All Points

https://leetcode.com/problems/min-cost-to-connect-all-points/

- **Difficulty:** Medium
- **Pattern:** Minimum Spanning Tree (Prim's algorithm)
- **Category:** Advanced Graphs
- **Tags:** array, union-find, graph, mst, minimum-spanning-tree

## Statement

Given `points` on a plane, connect all of them so every pair is reachable, minimizing total
cost. The cost between two points is their Manhattan distance. Return the minimum total cost.

## Signature

`minCostConnectPoints(points: number[][]) -> number`

## Constraints

- 1 ≤ points.length ≤ 1000; -10^6 ≤ xi, yi ≤ 10^6.

## Approach

The complete graph's MST is the answer. Prim's algorithm: start from any point, maintain a
min-heap of candidate edge costs to unvisited points. Repeatedly pop the cheapest edge to an
unvisited point, add its cost, mark it visited, and push edges from it to the remaining
points. Stop when all points are connected.

## Complexity

- **Time:** O(n² log n) — dense graph (every pair is an edge).
- **Space:** O(n²) edges in the heap worst case (O(n) with a Prim's array variant).

## Pattern

**MST (Prim / Kruskal).** The signal: cheapest way to connect everything. Prim grows a tree
via a min-heap of frontier edges; Kruskal sorts all edges and unions with Union-Find. For a
dense complete graph (like points), Prim with an O(n) key array is natural.

## Interview notes

- **Brute force → optimal:** Enumerating spanning trees is astronomically large; MST greedily
  gives the optimum (cut property). Prim O(n²) or Kruskal O(E log E).
- **Key insight:** the points form a complete graph; Manhattan distance is the edge weight;
  Prim avoids materializing all O(n²) edges up front (with the array variant).
- **Edge cases:** single point (cost 0); collinear points; duplicate points (cost 0 edges).
- **Common mistakes:** revisiting nodes (guard with visited); using Euclidean instead of
  Manhattan; integer overflow on large coordinates (fine in Python/JS).
- **Follow-ups:** Kruskal with Union-Find; MST on a sparse graph.
- **Related:** Network Delay Time (743), Redundant Connection (684).
