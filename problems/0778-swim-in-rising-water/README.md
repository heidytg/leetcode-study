# 778. Swim in Rising Water

https://leetcode.com/problems/swim-in-rising-water/

- **Difficulty:** Hard
- **Pattern:** Dijkstra on "max elevation along path" (minimax path)
- **Category:** Advanced Graphs
- **Tags:** array, bfs, dfs, union-find, heap, matrix

## Statement

`grid[i][j]` is the elevation at cell `(i,j)`. At time `t` you can move between adjacent
cells if both have elevation ≤ `t`. Return the least time to swim from the top-left to the
bottom-right corner.

## Signature

`swimInWater(grid: number[][]) -> number`

## Constraints

- 1 ≤ n ≤ 50; `grid` is a permutation of `0..n²-1`.

## Approach

The cost of a path is the **maximum elevation** on it; we want the path minimizing that
maximum (a minimax path). Run a Dijkstra variant: a min-heap keyed by the largest elevation
seen so far. Pop the cell with the smallest such max; the first time the destination is
popped, that value is the answer. Each cell finalized once.

## Complexity

- **Time:** O(n² log n).
- **Space:** O(n²).

## Pattern

**Minimax-path Dijkstra.** The signal: minimize the maximum edge/cell weight along a path
(bottleneck shortest path). Same heap-finalize structure as Dijkstra, but the key is
`max(pathMax, neighbor)` instead of a sum. Union-Find by increasing elevation or binary
search + BFS are alternatives.

## Interview notes

- **Brute force → optimal:** Binary search on time `t` + BFS reachability is O(n² log n);
  the heap minimax-Dijkstra is also O(n² log n) and single-pass.
- **Key insight:** path cost = max elevation, not sum; finalize on first pop (heap invariant).
- **Edge cases:** 1×1 grid (answer = grid[0][0]); the start/end elevations themselves.
- **Common mistakes:** summing elevations; revisiting finalized cells; forgetting to seed the
  start's own elevation.
- **Follow-ups:** Union-Find adding cells in elevation order; *Path With Minimum Effort* (1631).
- **Related:** Network Delay Time (743), Path With Minimum Effort (1631).
