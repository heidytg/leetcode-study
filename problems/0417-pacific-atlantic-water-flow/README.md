# 417. Pacific Atlantic Water Flow

https://leetcode.com/problems/pacific-atlantic-water-flow/

- **Difficulty:** Medium
- **Pattern:** Reverse multi-source DFS/BFS from borders
- **Category:** Graphs
- **Tags:** array, dfs, bfs, matrix

## Statement

Water flows from a cell to a 4-directional neighbor of **equal or lower** height. The
Pacific borders the top and left edges; the Atlantic the bottom and right. Return all cells
`[r, c]` from which water can reach **both** oceans.

## Signature

`pacificAtlantic(heights: number[][]) -> number[][]`  (any order)

## Constraints

- 1 ≤ m, n ≤ 200; 0 ≤ heights[i][j] ≤ 10^5.

## Approach

Search **backwards** from the oceans: from each ocean's border cells, traverse to neighbors
with **height ≥** current (water could flow down to us). Two boolean grids mark cells
reachable from the Pacific and Atlantic respectively. The answer is their intersection.
Border-seeded multi-source traversal avoids re-searching from every cell.

## Complexity

- **Time:** O(m·n) — each cell visited at most twice (once per ocean).
- **Space:** O(m·n) for the two reachability grids.

## Pattern

**Reverse reachability from sinks.** The signal: "cells that can reach destination(s)."
Instead of simulating outflow from every source, flood **inward from the destinations** with
the inverted condition, then combine. Pairs naturally with multi-source BFS.

## Interview notes

- **Brute force → optimal:** DFS from every cell to test both oceans is O((m·n)²). Reverse
  border flooding is O(m·n).
- **Key insight:** reverse the flow — from oceans, move to ≥-height neighbors; intersect the
  two reachable sets.
- **Edge cases:** single cell (reaches both); flat grid (all cells); strictly increasing
  toward one corner.
- **Common mistakes:** searching forward from each cell; wrong inequality direction on the
  reverse search.
- **Follow-ups:** count instead of list; weighted flow.
- **Related:** Number of Islands (200), Surrounded Regions (130).
