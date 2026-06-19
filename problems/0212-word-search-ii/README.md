# 212. Word Search II

https://leetcode.com/problems/word-search-ii/

- **Difficulty:** Hard
- **Pattern:** Trie + grid DFS backtracking
- **Category:** Tries
- **Tags:** array, string, backtracking, trie, matrix

## Statement

Given an `m × n` board of letters and a list of `words`, return all words that can be
formed by sequentially adjacent cells (horizontally/vertically), using each cell at most
once per word.

## Signature

`findWords(board: string[][], words: string[]) -> string[]`  (any order)

## Constraints

- 1 ≤ m, n ≤ 12; 1 ≤ words.length ≤ 3·10^4; 1 ≤ word length ≤ 10.

## Approach

Build a trie of all `words` (storing the full word at terminal nodes). DFS from every cell,
descending the trie by the current letter. When a trie node holds a word, record it. Mark
visited cells (temporarily overwrite, restore on backtrack). The trie lets all words be
searched simultaneously in one grid traversal instead of once per word.

## Complexity

- **Time:** O(m·n·4^L) worst case (L = max word length), heavily pruned by the trie.
- **Space:** O(total characters in words) for the trie.

## Pattern

**Trie-guided multi-pattern grid search.** The signal: search many strings in a grid at
once. A trie prunes branches the moment no word shares the current prefix — turning
"backtrack per word" into a single shared traversal. The canonical trie + backtracking
combo.

## Interview notes

- **Brute force → optimal:** Running *Word Search* (79) once per word is O(W·m·n·4^L). The
  trie collapses the W factor by sharing prefixes and pruning dead ends.
- **Key insight:** store the whole word at terminal nodes (no rebuild from the path);
  dedupe results (a word may be reachable multiple ways).
- **Edge cases:** duplicate words; words longer than the board can fit; single cell.
- **Common mistakes:** not restoring the cell after DFS; re-adding duplicates (use a set);
  not pruning exhausted trie branches (optional optimization: remove found words).
- **Follow-ups:** prune leaf trie nodes after finding to speed up; *Word Search* (79).
- **Related:** Implement Trie (208), Word Search (79).
