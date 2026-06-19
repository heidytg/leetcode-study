# 210. Course Schedule II

https://leetcode.com/problems/course-schedule-ii/

- **Difficulty:** Medium
- **Pattern:** Topological sort (Kahn's algorithm)
- **Category:** Graphs
- **Tags:** dfs, bfs, graph, topological-sort

## Statement

Return any valid order to take all `numCourses` given prerequisite pairs `[a, b]` (`b`
before `a`), or an empty array if impossible (a cycle exists).

## Signature

`findOrder(numCourses: number, prerequisites: number[][]) -> number[]`

> This repo returns the **lexicographically smallest** valid order (smallest-available-first
> Kahn's) so the result is deterministic and identical across languages for testing.

## Constraints

- 1 ≤ numCourses ≤ 2000; 0 ≤ prerequisites.length ≤ numCourses·(numCourses-1).

## Approach

Kahn's algorithm: compute indegrees, start from all zero-indegree courses, repeatedly take a
ready course and decrement its dependents' indegrees, adding newly-freed ones. Picking the
**smallest** ready course each step (min-heap / sorted ready set) makes the order
deterministic. If the produced order doesn't include every course, a cycle exists → return
`[]`.

## Complexity

- **Time:** O(V + E) (O((V+E) log V) with the smallest-first tie-break).
- **Space:** O(V + E).

## Pattern

**Topological ordering.** The signal: produce a linear order respecting "before"
constraints. Kahn's indegree BFS emits an order and detects cycles (order length < V). The
smallest-first tie-break is a determinism trick, not required by the problem.

## Interview notes

- **Brute force → optimal:** Kahn's (or DFS postorder reversed) is O(V+E) — optimal.
- **Key insight:** zero-indegree = ready now; emit it, relax its edges; incomplete order ⇒
  cycle.
- **Edge cases:** no prerequisites (any order, here `[0..n-1]`); a cycle (`[]`); disconnected
  courses.
- **Common mistakes:** wrong edge direction; not detecting the cycle (length check); DFS
  postorder forgetting to reverse.
- **Follow-ups:** all valid orderings; *Alien Dictionary* (269) builds the graph first.
- **Related:** Course Schedule (207), Alien Dictionary (269).
