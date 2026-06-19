# 332. Reconstruct Itinerary

https://leetcode.com/problems/reconstruct-itinerary/

- **Difficulty:** Hard
- **Pattern:** Eulerian path (Hierholzer's algorithm)
- **Category:** Advanced Graphs
- **Tags:** dfs, graph, eulerian-circuit

## Statement

Given airline `tickets` `[from, to]`, reconstruct the itinerary that uses **all** tickets
exactly once, starting at `"JFK"`. If multiple valid itineraries exist, return the one with
the smallest lexical order when read as a single string.

## Signature

`findItinerary(tickets: string[][]) -> string[]`

## Constraints

- 1 ≤ tickets.length ≤ 300; a valid itinerary is guaranteed.

## Approach

This is an Eulerian path (use every edge once). Build adjacency lists and sort destinations
so the smallest is always taken first. Run Hierholzer's algorithm: DFS greedily down edges,
removing each as used; when a node has no unused edges, prepend it to the route (push to a
stack). Reversing the post-order stack yields the lexically smallest Eulerian path.

## Complexity

- **Time:** O(E log E) — sorting edges.
- **Space:** O(E).

## Pattern

**Hierholzer's Eulerian path.** The signal: "use every edge exactly once." Greedily walk
until stuck, backtrack adding dead-ends to the front of the route. Sorting neighbors gives
the lexical tie-break. Distinct from node-visiting (Hamiltonian) problems.

## Interview notes

- **Brute force → optimal:** Backtracking over all orderings is exponential; Hierholzer's is
  O(E log E).
- **Key insight:** append a node to the route only when it has no remaining edges (post-order),
  then reverse; sorted adjacency gives smallest-lexical.
- **Edge cases:** a node revisited multiple times; multiple tickets between the same pair;
  dead-ends that must be appended first.
- **Common mistakes:** plain DFS without the post-order append (gets stuck on dead-ends);
  not sorting for the lexical requirement.
- **Follow-ups:** Eulerian circuit; detect when no Eulerian path exists.
- **Related:** Course Schedule II (210), Cheapest Flights Within K Stops (787).
