# 695. Max Area of Island

https://leetcode.com/problems/max-area-of-island/

- **Difficulty:** Medium
- **Pattern:** Grid flood fill returning component size
- **Category:** Graphs
- **Tags:** array, dfs, bfs, union-find, matrix

## Statement

Given a binary grid (`1` = land, `0` = water), return the area (cell count) of the largest
4-directionally connected island, or `0` if there is none.

## Signature

`maxAreaOfIsland(grid: number[][]) -> number`

## Constraints

- 1 ≤ m, n ≤ 50; cells are `0` or `1`.

## Approach

Same flood fill as counting islands, but each DFS **returns the size** of its component:
`1 + sum of the four neighbor DFS results`, sinking visited land to `0`. Track the maximum
across all seeds.

## Complexity

- **Time:** O(m·n).
- **Space:** O(m·n) worst case (recursion).

## Pattern

**Component sizing via flood fill.** The signal: largest/total region of connected cells.
The DFS returns an aggregate (count) instead of just marking — the same return-while-marking
trick used in tree-size and area problems.

## Interview notes

- **Brute force → optimal:** Flood fill is O(m·n); BFS avoids recursion depth.
- **Key insight:** the DFS both marks visited and returns the area; combine children's
  returns.
- **Edge cases:** no land (0); the whole grid is one island; disconnected single cells.
- **Common mistakes:** not sinking visited cells (infinite recursion / overcount);
  forgetting to add 1 for the current cell.
- **Follow-ups:** count islands (200); perimeter of an island (463).
- **Related:** Number of Islands (200), Surrounded Regions (130).
