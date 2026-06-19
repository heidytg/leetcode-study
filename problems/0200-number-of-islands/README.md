# 200. Number of Islands

https://leetcode.com/problems/number-of-islands/

- **Difficulty:** Medium
- **Pattern:** Grid flood fill (DFS/BFS connected components)
- **Category:** Graphs
- **Tags:** array, dfs, bfs, union-find, matrix

## Statement

Given an `m × n` grid of `'1'` (land) and `'0'` (water), return the number of islands.
Islands are connected 4-directionally and surrounded by water.

## Signature

`numIslands(grid: string[][]) -> number`

## Constraints

- 1 ≤ m, n ≤ 300; cells are `'0'` or `'1'`.

## Approach

Scan the grid. On each unvisited `'1'`, increment the island count and flood-fill its whole
connected component (DFS/BFS), sinking visited land to `'0'` so it isn't recounted. Each
cell is visited once across all fills.

## Complexity

- **Time:** O(m·n).
- **Space:** O(m·n) worst case (recursion/queue for one big island).

## Pattern

**Connected components on a grid.** The signal: count/size regions of adjacent equal cells.
Flood fill from each unvisited seed marks an entire component; the number of seeds is the
component count. Union-Find is an alternative (useful for dynamic connectivity).

## Interview notes

- **Brute force → optimal:** Flood fill is already O(m·n); the alternatives are DFS vs BFS
  (BFS avoids deep recursion stacks) vs Union-Find.
- **Key insight:** sink visited land in place to avoid a separate visited matrix.
- **Edge cases:** all water (0); all land (1); single cell; thin 1×n grids.
- **Common mistakes:** counting cells instead of components; deep recursion stack overflow
  on huge islands (use BFS); allowing diagonal connectivity.
- **Follow-ups:** *Max Area of Island* (695); *Number of Distinct Islands* (694); dynamic
  islands via Union-Find (305).
- **Related:** Max Area of Island (695), Surrounded Regions (130).
