# 51. N-Queens

https://leetcode.com/problems/n-queens/

- **Difficulty:** Hard
- **Pattern:** Backtracking with conflict sets
- **Category:** Backtracking
- **Tags:** array, backtracking

## Statement

Place `n` queens on an `n × n` board so none attack another (no shared row, column, or
diagonal). Return all distinct solutions as boards of `'Q'`/`'.'` strings.

## Signature

`solveNQueens(n: number) -> string[][]`  (any order of solutions)

## Constraints

- 1 ≤ n ≤ 9

## Approach

Place one queen per row, left to right by row index. For each row, try each column that is
not attacked: track occupied **columns**, **`/` diagonals** (`r + c`), and **`\` diagonals**
(`r - c`) in sets for O(1) checks. Place, recurse to the next row, then undo. At row `n`,
serialize the board into a solution.

## Complexity

- **Time:** O(n!) — pruned heavily by the conflict sets.
- **Space:** O(n) for the sets and recursion (plus output).

## Pattern

**Constraint backtracking with incremental conflict tracking.** The signal: place items
under mutual-exclusion constraints. Encode each constraint as a set keyed by an invariant
(column, the two diagonal sums/differences) so validity is O(1). The archetypal hard
backtracking problem.

## Interview notes

- **Brute force → optimal:** Checking the whole board each placement is O(n) per check; the
  three conflict sets make it O(1), and one-queen-per-row removes the row dimension entirely.
- **Key insight:** diagonals are identified by `r+c` (anti) and `r-c` (main); one queen per
  row by construction.
- **Edge cases:** n = 1 (one solution); n = 2, 3 (no solutions → empty list).
- **Common mistakes:** forgetting to remove from the sets on backtrack; swapping the two
  diagonal keys; scanning the board instead of using sets.
- **Follow-ups:** *N-Queens II* (52, count only); bitmask conflict sets for speed.
- **Related:** Sudoku Solver (37), Permutations (46).
