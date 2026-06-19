# 211. Design Add and Search Words Data Structure

https://leetcode.com/problems/design-add-and-search-words-data-structure/

- **Difficulty:** Medium
- **Pattern:** Trie with wildcard DFS
- **Category:** Tries
- **Tags:** string, dfs, design, trie

## Statement

Design `WordDictionary` supporting `addWord(word)` and `search(word)`, where `search`
may contain `.` characters that match any single letter.

## Signature

Class `WordDictionary` with `addWord(word)` and `search(word) -> bool`.

> Tested via `wordDictionaryOps(ops, args)`.

## Constraints

- 1 ≤ word length ≤ 25; lowercase letters for `addWord`, letters or `.` for `search`.
- Up to 10^4 calls; at most 2 dots per search word (so wildcard fan-out is bounded).

## Approach

Store words in a trie. `addWord` is the standard insert. `search` is a DFS over the trie:
for a normal character follow that single edge; for `.` recurse into **every** child.
Success requires consuming the whole word and landing on a node marked end-of-word.

## Complexity

- **Time:** addWord O(L); search O(L) without dots, up to O(26^d · L) with `d` dots.
- **Space:** O(total characters) for the trie plus O(L) recursion.

## Pattern

**Trie + branching DFS for wildcards.** The signal: prefix structure plus pattern matching
with "any" symbols. A `.` turns the deterministic walk into a branch over all children —
the trie bounds each branch by the stored vocabulary, not the full alphabet.

## Interview notes

- **Brute force → optimal:** Storing words in a list makes wildcard search O(n·L). The
  trie shares prefixes and prunes dead branches early.
- **Key insight:** only `.` causes branching; ordinary characters keep the walk linear.
- **Edge cases:** all-dots query (`"..."`); a dot matching a word that ends earlier; no
  match.
- **Common mistakes:** not checking end-of-word at the recursion base; iterating the whole
  alphabet instead of existing children (slower).
- **Follow-ups:** `*` wildcard (zero-or-more) needs different handling; ranked results.
- **Related:** Implement Trie (208), Word Search II (212).
