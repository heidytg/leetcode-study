# 36. Valid Sudoku

https://leetcode.com/problems/valid-sudoku/

- **Difficulty:** Medium
- **Pattern:** Hash sets per row / column / box
- **Category:** Arrays & Hashing
- **Tags:** array, hash-table, matrix

## Statement

Determine if a 9×9 Sudoku board is valid. Only the filled cells need to be checked
against three rules: each row, each column, and each of the nine 3×3 sub-boxes must not
contain a repeated digit `1-9`. Empty cells are `'.'`. The board may be incomplete.

## Signature

`isValidSudoku(board: string[][]) -> boolean`

## Constraints

- `board.length == 9` and `board[i].length == 9`
- Each cell is a digit `'1'-'9'` or `'.'`.

## Approach

Keep one set per row, one per column, and one per 3×3 box (box index =
`(r // 3) * 3 + c // 3`). Scan every cell once; skip `'.'`. For a digit, if it already
exists in its row set, column set, or box set, the board is invalid. Otherwise insert it
into all three. Surviving the full scan means it is valid.

## Complexity

- **Time:** O(1) — the board is fixed at 81 cells (O(n²) for an n×n generalization).
- **Space:** O(1) — 27 bounded sets (O(n) generalized).

## Pattern

**Constraint tracking with hash sets.** The signal: "no repeats within each of several
overlapping groups." Maintain a membership set per group and check on insert. The box
index formula `(r/3)*3 + c/3` for mapping a cell to its block is a reusable trick.

## Interview notes

- **Brute force → optimal:** Re-scanning each row/column/box separately is also O(1)
  here but clumsier; the single-pass three-sets approach is cleanest.
- **Key insight:** one combined pass updating three independent set families; the box
  index formula ties a cell to its 3×3 block.
- **Edge cases:** empty board (all `'.'`) is valid; only filled cells are constrained.
- **Common mistakes:** wrong box-index math; using a single shared set across groups.
- **Follow-ups:** *Sudoku Solver* (37) — backtracking that reuses this validity check.
- **Related:** Set Matrix Zeroes (73), Spiral Matrix (54).
