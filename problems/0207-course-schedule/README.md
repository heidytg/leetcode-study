# 207. Course Schedule

https://leetcode.com/problems/course-schedule/

- **Difficulty:** Medium
- **Pattern:** Cycle detection in a directed graph (topological feasibility)
- **Category:** Graphs
- **Tags:** dfs, bfs, graph, topological-sort

## Statement

Given `numCourses` and prerequisite pairs `[a, b]` (take `b` before `a`), return `true` if
you can finish all courses — i.e. the prerequisite graph is acyclic.

## Signature

`canFinish(numCourses: number, prerequisites: number[][]) -> boolean`

## Constraints

- 1 ≤ numCourses ≤ 2000; 0 ≤ prerequisites.length ≤ 5000; pairs are distinct.

## Approach

Build a directed graph and detect a cycle. DFS with three states — unvisited, **visiting**
(on the current path), done — returns false if it re-enters a "visiting" node (back edge =
cycle). Equivalently, Kahn's algorithm: if a topological order covering all nodes exists,
it's feasible. All courses finishable ⇔ no cycle.

## Complexity

- **Time:** O(V + E).
- **Space:** O(V + E) for the graph and recursion/queue.

## Pattern

**DAG feasibility / cycle detection.** The signal: ordering under "must come before"
constraints. A valid order exists iff the dependency graph is acyclic. DFS coloring or
Kahn's indegree BFS both decide it in linear time.

## Interview notes

- **Brute force → optimal:** Both DFS coloring and Kahn's BFS are O(V+E) — there's no
  cheaper correct method; be ready to code either.
- **Key insight:** a back edge to a node currently on the DFS stack = cycle ⇒ infeasible.
- **Edge cases:** no prerequisites (always true); self-dependency `[a,a]` (cycle);
  disconnected components.
- **Common mistakes:** only a 2-state visited (can't tell a back edge from a cross edge);
  wrong edge direction.
- **Follow-ups:** return the actual order → *Course Schedule II* (210); detect which nodes
  are in cycles.
- **Related:** Course Schedule II (210), Graph Valid Tree (261).
