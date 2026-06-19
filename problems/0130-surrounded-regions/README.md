# 130. Surrounded Regions

https://leetcode.com/problems/surrounded-regions/

- **Difficulty:** Medium
- **Pattern:** Border DFS/BFS to mark survivors
- **Category:** Graphs
- **Tags:** array, dfs, bfs, union-find, matrix

## Statement

Given an `m × n` board of `'X'` and `'O'`, capture all regions of `'O'` that are
**completely surrounded** by `'X'` (flip them to `'X'`). An `'O'` region touching the
border is not captured.

## Signature

`solve(board: string[][]) -> string[][]`  (the board is modified in place; we return it)

## Constraints

- 1 ≤ m, n ≤ 200; cells are `'X'` or `'O'`.

## Approach

Only `'O'`s connected to the border survive. From every border `'O'`, flood-fill and mark
those cells temporarily (`'T'`). Then sweep the board: remaining `'O'`s are surrounded → flip
to `'X'`; the marked `'T'`s revert to `'O'`. Working from the border identifies survivors
without checking each region's enclosure directly.

## Complexity

- **Time:** O(m·n).
- **Space:** O(m·n) recursion/queue worst case.

## Pattern

**Border seeding (mark the exceptions).** The signal: a region is "safe" iff it connects to
an edge. Mark everything reachable from the border, then bulk-transform the rest. The inverse
of flooding interior regions — far simpler than testing enclosure per region.

## Interview notes

- **Brute force → optimal:** Checking enclosure for each region is messy/expensive; border
  flooding is a clean O(m·n).
- **Key insight:** flood from the border to find what's NOT captured; transform the
  complement.
- **Edge cases:** all border cells; no `'O'`s; an `'O'` region touching the edge by one cell.
- **Common mistakes:** flooding from interior `'O'`s; forgetting to revert the temporary
  marker; 1-row/1-col boards (everything is border).
- **Follow-ups:** Union-Find with a virtual "border" node; count captured cells.
- **Related:** Number of Islands (200), Pacific Atlantic Water Flow (417).
