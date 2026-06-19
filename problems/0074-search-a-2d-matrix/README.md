# 74. Search a 2D Matrix

https://leetcode.com/problems/search-a-2d-matrix/

- **Difficulty:** Medium
- **Pattern:** Binary search over a flattened sorted matrix
- **Category:** Binary Search
- **Tags:** array, binary-search, matrix

## Statement

Given an `m × n` matrix where each row is sorted ascending and the first element of each
row is greater than the last of the previous row, return `true` if `target` is present.

## Signature

`searchMatrix(matrix: number[][], target: number) -> boolean`

## Constraints

- 1 ≤ m, n ≤ 100
- -10^4 ≤ matrix[i][j], target ≤ 10^4

## Approach

The ordering means the whole matrix is one sorted sequence read row by row. Binary search
over the virtual index range `[0, m·n)`, mapping each `mid` back to a cell with
`row = mid / cols`, `col = mid % cols`. Compare and narrow exactly like 1-D binary search.

## Complexity

- **Time:** O(log(m·n)).
- **Space:** O(1).

## Pattern

**Index remapping + binary search.** The signal: a 2-D structure with a global sort order.
Rather than search row then column, treat it as a 1-D array via integer div/mod index
math. The remapping trick recurs whenever a grid has a linearizable order.

## Interview notes

- **Brute force → optimal:** Scanning all cells is O(m·n); two binary searches (row, then
  within row) is O(log m + log n); the flattened search is O(log(m·n)) — equivalent and
  cleanest.
- **Key insight:** `mid → (mid / cols, mid % cols)` turns one binary search over the grid.
- **Edge cases:** single row or column; target smaller/larger than every element; 1×1.
- **Common mistakes:** dividing/modding by rows instead of cols; off-by-one on the
  `m·n - 1` upper bound.
- **Follow-ups:** *Search a 2D Matrix II* (240) — rows and columns sorted but no global
  order → staircase search from a corner, O(m+n).
- **Related:** Binary Search (704), Search a 2D Matrix II (240).
