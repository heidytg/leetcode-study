# 994. Rotting Oranges

https://leetcode.com/problems/rotting-oranges/

- **Difficulty:** Medium
- **Pattern:** Multi-source BFS (level = minute)
- **Category:** Graphs
- **Tags:** array, bfs, matrix

## Statement

In a grid, `0` = empty, `1` = fresh orange, `2` = rotten. Each minute, every rotten orange
rots its 4-directional fresh neighbors. Return the minutes until no fresh orange remains, or
`-1` if some can never rot.

## Signature

`orangesRotting(grid: number[][]) -> number`

## Constraints

- 1 ≤ m, n ≤ 10; cells are 0, 1, or 2.

## Approach

Multi-source BFS: enqueue **all** initially rotten oranges, count fresh ones. Process the
queue level by level — each level is one minute — rotting fresh neighbors and decrementing
the fresh count. Stop when the queue empties; if fresh remain, return `-1`, else the number
of minutes elapsed.

## Complexity

- **Time:** O(m·n).
- **Space:** O(m·n) for the queue.

## Pattern

**Multi-source BFS.** The signal: simultaneous spread from many origins, minimizing
time/distance. Seed the queue with all sources at once and expand in lockstep; each BFS
level is a time step. Reused for *Walls and Gates*, *01 Matrix*, shortest multi-start paths.

## Interview notes

- **Brute force → optimal:** Repeatedly scanning the grid each minute is O((m·n)²); BFS is
  O(m·n).
- **Key insight:** start BFS from all rotten cells together; count fresh to detect the `-1`
  case.
- **Edge cases:** no fresh oranges (0 minutes); a fresh orange isolated from any rotten one
  (-1); all empty.
- **Common mistakes:** counting minutes off-by-one (don't increment on the last empty
  level); forgetting the unreachable-fresh check.
- **Follow-ups:** *Walls and Gates* (286); *01 Matrix* (542); shortest bridge (934).
- **Related:** Walls and Gates (286), Number of Islands (200).
