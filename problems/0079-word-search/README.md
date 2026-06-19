# 79. Word Search

https://leetcode.com/problems/word-search/

- **Difficulty:** Medium
- **Pattern:** Grid DFS backtracking with visited marking
- **Category:** Backtracking
- **Tags:** array, backtracking, matrix

## Statement

Given an `m × n` board of characters and a `word`, return `true` if the word can be formed
from sequentially adjacent cells (horizontal/vertical), using each cell at most once.

## Signature

`exist(board: string[][], word: string) -> boolean`

## Constraints

- 1 ≤ m, n ≤ 6 (typical); 1 ≤ word.length ≤ 15.

## Approach

Try starting a DFS at every cell. At depth `i`, the cell must match `word[i]`; recurse into
the four neighbors for `word[i+1]`. Temporarily mark the current cell visited (overwrite
with a sentinel) and restore it on the way out, so a path never reuses a cell. Success when
`i` reaches `word.length`.

## Complexity

- **Time:** O(m · n · 4^L) worst case (L = word length).
- **Space:** O(L) recursion depth (in-place visited marking, no extra grid).

## Pattern

**Backtracking DFS on a grid.** The signal: find a path/shape in a matrix under a
no-revisit rule. Mark-recurse-unmark on the cell itself avoids a separate visited set. The
base of *Word Search II* (which adds a trie to search many words at once).

## Interview notes

- **Brute force → optimal:** This is the standard approach; the optimization is pruning
  (start only at cells matching `word[0]`; early-exit on first match).
- **Key insight:** mutate the board to mark visited and restore on backtrack — O(1) extra
  space versus a visited matrix.
- **Edge cases:** word longer than the board's cell count; single cell; repeated letters
  forcing backtracking.
- **Common mistakes:** not restoring the cell; allowing diagonal moves; missing the bounds
  or mismatch check before recursing.
- **Follow-ups:** *Word Search II* (212, many words via a trie).
- **Related:** Word Search II (212), Number of Islands (200).
