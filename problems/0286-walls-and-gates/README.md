# 286. Walls and Gates

https://leetcode.com/problems/walls-and-gates/

- **Difficulty:** Medium
- **Pattern:** Multi-source BFS from gates
- **Category:** Graphs
- **Tags:** array, bfs, matrix

## Statement

A grid of rooms: `-1` = wall, `0` = gate, `2147483647` (INF) = empty room. Fill each empty
room with the distance to its nearest gate (leave INF if unreachable). Modify in place.

## Signature

`wallsAndGates(rooms: number[][]) -> number[][]`  (modified in place; we return it)

## Constraints

- m, n grid; cells are `-1`, `0`, or `2147483647`.

## Approach

Multi-source BFS seeded with **all gates** at once. Expand level by level; the first time an
empty room (still INF) is reached, its distance is the parent's distance + 1 — guaranteed
minimal because BFS reaches nearer cells first. Walls block traversal; rooms never reached
stay INF.

## Complexity

- **Time:** O(m·n).
- **Space:** O(m·n) for the queue.

## Pattern

**Multi-source shortest distance (unit weights).** The signal: nearest-source distance for
every cell. Seeding BFS with all sources computes all distances in one O(m·n) sweep — vastly
better than a BFS per gate. Same engine as *Rotting Oranges* and *01 Matrix*.

## Interview notes

- **Brute force → optimal:** BFS from each empty room to the nearest gate is
  O((m·n)²); multi-source BFS from gates is O(m·n).
- **Key insight:** seed all gates together; first visit = shortest distance (BFS property).
- **Edge cases:** no gates (everything stays INF); no empty rooms; rooms walled off from all
  gates.
- **Common mistakes:** BFS from rooms instead of gates; revisiting cells (only fill cells
  still equal to INF); treating INF as a normal large number in comparisons.
- **Follow-ups:** *Rotting Oranges* (994); *01 Matrix* (542); weighted gates → Dijkstra.
- **Related:** Rotting Oranges (994), Number of Islands (200).
