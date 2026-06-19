# 787. Cheapest Flights Within K Stops

https://leetcode.com/problems/cheapest-flights-within-k-stops/

- **Difficulty:** Medium
- **Pattern:** Bellman-Ford bounded by K relaxations
- **Category:** Advanced Graphs
- **Tags:** dynamic-programming, graph, heap, shortest-path, bellman-ford

## Statement

Given `n` cities, directed `flights[i] = [from, to, price]`, a `src`, a `dst`, and `k`,
return the cheapest price from `src` to `dst` using **at most k stops** (≤ k+1 edges), or
`-1` if unreachable.

## Signature

`findCheapestPrice(n, flights, src, dst, k) -> number`

## Constraints

- 1 ≤ n ≤ 100; 0 ≤ flights.length ≤ n·(n-1); 0 ≤ src, dst, k < n.

## Approach

Bellman-Ford limited to `k+1` rounds. Keep a `dist` array; each round, relax every edge
**using the previous round's distances** (snapshot `tmp = dist` so a path can't gain extra
edges within one round). After `k+1` rounds, `dist[dst]` is the cheapest price within the
stop limit, or `-1` if still infinite.

## Complexity

- **Time:** O(k · E).
- **Space:** O(n).

## Pattern

**Edge-bounded Bellman-Ford.** The signal: shortest path with a **hop limit**. Plain
Dijkstra can't bound edges correctly; Bellman-Ford's round structure naturally limits path
length to the number of rounds. The snapshot is what enforces "at most one new edge per
round."

## Interview notes

- **Brute force → optimal:** DFS/BFS exploring all ≤k+1-edge paths is exponential;
  Bellman-Ford with k+1 rounds is O(k·E).
- **Key insight:** snapshot distances each round (`tmp = dist`) so relaxations within a round
  don't chain extra edges — this is what makes the hop bound correct.
- **Edge cases:** k = 0 (direct flights only); unreachable dst (-1); cheaper path needing
  more than k stops (must be ignored).
- **Common mistakes:** relaxing in place (lets one round use multiple new edges); Dijkstra
  without a hop dimension (wrong under the limit).
- **Follow-ups:** Dijkstra with a (node, stops) state; path reconstruction.
- **Related:** Network Delay Time (743), Reconstruct Itinerary (332).
