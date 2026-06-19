# 269. Alien Dictionary

https://leetcode.com/problems/alien-dictionary/

- **Difficulty:** Hard
- **Pattern:** Build a graph from order constraints + topological sort
- **Category:** Advanced Graphs
- **Tags:** array, string, dfs, bfs, graph, topological-sort

## Statement

Given a list of `words` sorted lexicographically by an unknown alien alphabet, return a
string of the letters in that alphabet's order. If the order is invalid, return `""`. Any
valid order is acceptable.

## Signature

`alienOrder(words: string[]) -> string`

> This repo returns the **lexicographically smallest** valid order (smallest-letter-first
> Kahn's) so the output is deterministic across languages.

## Constraints

- 1 ≤ words.length ≤ 100; lowercase letters.

## Approach

Compare each adjacent pair of words to find the first differing character — that gives one
ordering edge `c1 → c2`. (If a longer word precedes its own prefix, the input is invalid →
`""`.) Then topologically sort the resulting character graph (Kahn's). A cycle (not all
letters emitted) ⇒ invalid ⇒ `""`.

## Complexity

- **Time:** O(total characters) to build the graph + O(V + E) for the sort.
- **Space:** O(unique letters + edges).

## Pattern

**Constraints → graph → topological sort.** The signal: derive an ordering from pairwise
comparisons. Extract edges from the evidence, then topo-sort. The graph-construction step is
the crux; the sort is the same as *Course Schedule II*.

## Interview notes

- **Brute force → optimal:** No shortcut around building the graph; the topo sort is O(V+E).
- **Key insight:** only the *first* differing char between adjacent words yields an edge; the
  invalid-prefix case (`["abc","ab"]`) must be detected.
- **Edge cases:** invalid prefix ordering (`""`); a cycle (`""`); single word / single letter;
  letters with no constraints (still must appear).
- **Common mistakes:** adding edges beyond the first difference; missing the prefix-invalid
  check; forgetting isolated letters.
- **Follow-ups:** all valid orderings; detect & report the conflicting pair.
- **Related:** Course Schedule II (210), Reconstruct Itinerary (332).
