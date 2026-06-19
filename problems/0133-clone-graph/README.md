# 133. Clone Graph

https://leetcode.com/problems/clone-graph/

- **Difficulty:** Medium
- **Pattern:** Graph traversal with original→clone map
- **Category:** Graphs
- **Tags:** hash-table, dfs, bfs, graph

## Statement

Given a reference to a node in a connected undirected graph, return a **deep copy**. Each
node has an integer value and a list of neighbors.

## Signature

`cloneGraph(node) -> Node | null`

> Tested via `cloneGraphArr(adjList)` using LeetCode's adjacency-list format
> (`adjList[i]` = neighbor values of node `i+1`); the clone is serialized back to that form.

## Constraints

- 0 ≤ nodes ≤ 100; 1 ≤ Node.val ≤ 100, unique; undirected, connected (or empty).

## Approach

DFS/BFS with a hash map from each original node to its clone. On first visit, create the
clone and record it *before* recursing into neighbors (so cycles terminate). For each
neighbor, link the clone to the neighbor's clone (creating it if needed). The map both
prevents infinite loops and lets edges reference already-made clones.

## Complexity

- **Time:** O(V + E).
- **Space:** O(V) for the map (and recursion/queue).

## Pattern

**Identity map for graph copy.** The signal: duplicate a graph with cycles/shared
references. Map original→clone, record before recursing, and translate every edge through
the map. The graph analogue of *Copy List with Random Pointer*.

## Interview notes

- **Brute force → optimal:** You must touch each node/edge once — O(V+E); the only question
  is correctly handling cycles (the map, recorded pre-recursion).
- **Key insight:** insert the clone into the map *before* visiting neighbors, or cycles
  recurse forever.
- **Edge cases:** empty graph (null); single node, no edges; self-loop; dense graph.
- **Common mistakes:** recording the clone after recursion (infinite loop); sharing original
  neighbor references instead of clones.
- **Follow-ups:** clone a directed graph; serialize/deserialize a graph.
- **Related:** Copy List with Random Pointer (138), Number of Islands (200).
