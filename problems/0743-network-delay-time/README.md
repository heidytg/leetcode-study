# 743. Network Delay Time

https://leetcode.com/problems/network-delay-time/

- **Difficulty:** Medium
- **Pattern:** Single-source shortest path (Dijkstra)
- **Category:** Advanced Graphs
- **Tags:** dfs, bfs, graph, heap, shortest-path, dijkstra

## Statement

Given directed weighted edges `times[i] = [u, v, w]` (signal takes `w` time from `u` to `v`),
`n` nodes, and a source `k`, return the time for all nodes to receive the signal, or `-1` if
some node is unreachable.

## Signature

`networkDelayTime(times: number[][], n: number, k: number) -> number`

## Constraints

- 1 ≤ k ≤ n ≤ 100; 1 ≤ times.length ≤ 6000; 0 ≤ w ≤ 100; non-negative weights.

## Approach

Dijkstra from `k`. Use a min-heap keyed by tentative distance; pop the closest unfinalized
node, finalize its distance, and relax its outgoing edges. Non-negative weights guarantee
the first time a node is popped, its distance is final. The answer is the maximum finalized
distance — or `-1` if fewer than `n` nodes were reached.

## Complexity

- **Time:** O(E log V).
- **Space:** O(V + E).

## Pattern

**Dijkstra's shortest path.** The signal: shortest paths from one source with non-negative
weights. A min-heap finalizes nodes in increasing distance. "Time for all to receive" = the
farthest shortest-path distance. (Bellman-Ford handles negative weights instead.)

## Interview notes

- **Brute force → optimal:** Repeated relaxation (Bellman-Ford) is O(V·E); Dijkstra with a
  heap is O(E log V) for non-negative weights.
- **Key insight:** the answer is the max over all shortest distances; unreachable node ⇒ -1.
- **Edge cases:** unreachable nodes (-1); single node (0); multiple edges between a pair (take
  the min via relaxation).
- **Common mistakes:** revisiting finalized nodes (guard); forgetting the reachability check;
  using BFS (ignores weights).
- **Follow-ups:** negative weights → Bellman-Ford (787); path reconstruction.
- **Related:** Cheapest Flights Within K Stops (787), Swim in Rising Water (778).
