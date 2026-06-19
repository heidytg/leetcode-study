# 127. Word Ladder

https://leetcode.com/problems/word-ladder/

- **Difficulty:** Hard
- **Pattern:** BFS shortest path over implicit word graph
- **Category:** Graphs
- **Tags:** hash-table, string, bfs

## Statement

Given `beginWord`, `endWord`, and a `wordList`, return the number of words in the shortest
transformation sequence (each step changes one letter, every intermediate word must be in the
list), or `0` if none exists. The length counts both endpoints.

## Signature

`ladderLength(beginWord: string, endWord: string, wordList: string[]) -> number`

## Constraints

- 1 ≤ word length ≤ 10; 1 ≤ wordList.length ≤ 5000; all same length, lowercase.

## Approach

Treat words as graph nodes; edges connect words differing by one letter. BFS from `beginWord`
finds the shortest path. To find neighbors fast, precompute a map from wildcard patterns
(`h*t`, `*ot`, …) to the words matching them; words sharing a pattern are one edit apart.
BFS level number = transformation length; return it on reaching `endWord`.

## Complexity

- **Time:** O(N · L²) — N words, L length (building/looking up L patterns of length L each).
- **Space:** O(N · L²) for the pattern map.

## Pattern

**BFS on an implicit graph.** The signal: shortest steps between states under a one-step
transformation rule. Don't materialize the full graph — generate neighbors on demand (wildcard
patterns here). BFS guarantees the shortest path in unweighted graphs.

## Interview notes

- **Brute force → optimal:** Comparing every word pair to build edges is O(N²·L); the
  wildcard-pattern index makes neighbor lookup O(L²) per word. Bidirectional BFS halves the
  explored frontier.
- **Key insight:** wildcard patterns group one-edit-apart words; BFS levels = path length.
- **Edge cases:** `endWord` not in the list (0); `beginWord == endWord` handling; no path.
- **Common mistakes:** generating neighbors by trying all 26 letters × L positions (also works
  but slower to reason about); not marking visited (revisits / TLE); off-by-one on the length.
- **Follow-ups:** return an actual path → *Word Ladder II* (126); bidirectional BFS.
- **Related:** Word Ladder II (126), Open the Lock (752).
