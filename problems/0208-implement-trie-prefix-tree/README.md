# 208. Implement Trie (Prefix Tree)

https://leetcode.com/problems/implement-trie-prefix-tree/

- **Difficulty:** Medium
- **Pattern:** Trie (prefix tree)
- **Category:** Tries
- **Tags:** hash-table, string, design, trie

## Statement

Implement a trie with `insert(word)`, `search(word)` (exact word present), and
`startsWith(prefix)` (any word with this prefix).

## Signature

Class `Trie` with `insert(word)`, `search(word) -> bool`, `startsWith(prefix) -> bool`.

> Tested via `trieOps(ops, args)` replaying LeetCode's `[operations]` / `[arguments]`
> lists (`null` for void ops).

## Constraints

- 1 ≤ word/prefix length ≤ 2000; lowercase English letters.
- Up to 3·10^4 calls.

## Approach

Each node holds a map from character to child node plus an `end` flag marking a complete
word. `insert` walks/creates nodes for each character and sets `end` at the last.
`search` walks the path and checks `end`; `startsWith` walks the path and only checks the
path exists. Sharing prefixes keeps storage compact.

## Complexity

- **Time:** O(L) per operation (L = word length).
- **Space:** O(total characters inserted).

## Pattern

**Prefix tree.** The signal: many strings sharing prefixes, with prefix/word membership
queries. A trie gives O(L) operations independent of the number of stored words — the
foundation for autocomplete, wildcard search (211), and word-grid search (212).

## Interview notes

- **Brute force → optimal:** A hash set answers exact `search` in O(L) but `startsWith`
  needs O(n·L) scanning. The trie makes both O(L).
- **Key insight:** separate "path exists" (`startsWith`) from "word ends here" (`search`)
  via the `end` flag.
- **Edge cases:** prefix that is also a full word; empty operations; repeated inserts.
- **Common mistakes:** forgetting the `end` flag (then `search`==`startsWith`); fixed
  26-array vs hash map trade-off (array is faster, map is sparser).
- **Follow-ups:** wildcard search (211); store frequencies for ranking; compress (radix tree).
- **Related:** Design Add and Search Words (211), Word Search II (212).
