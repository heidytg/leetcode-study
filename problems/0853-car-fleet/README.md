# 853. Car Fleet

https://leetcode.com/problems/car-fleet/

- **Difficulty:** Medium
- **Pattern:** Sort by position + monotonic stack of arrival times
- **Category:** Stack
- **Tags:** array, stack, sorting, monotonic-stack

## Statement

`target` is the destination. Car `i` starts at `position[i]` moving at `speed[i]` toward
the target; cars can't pass, so a faster car catching a slower one forms a fleet moving at
the slower speed. Return the number of fleets that arrive at the target.

## Signature

`carFleet(target: number, position: number[], speed: number[]) -> number`

## Constraints

- 1 ≤ n ≤ 10^5
- 0 < target, speed[i] ≤ 10^6
- 0 ≤ position[i] < target; all positions distinct.

## Approach

Sort cars by starting position descending (closest to the target first). Compute each
car's time to reach the target, `(target - position) / speed`. Scanning from the front
car backward: a car forms a **new fleet** only if its arrival time is strictly greater
than the current lead fleet's time — otherwise it catches up and merges. Track the
current fleet time; count each car that exceeds it.

## Complexity

- **Time:** O(n log n) — dominated by the sort.
- **Space:** O(n) — the sorted order / stack of times.

## Pattern

**Sort then monotonic sweep.** The signal: interactions resolve in a positional order, so
sorting linearizes them, and a stack/running-extreme of times decides merges. The
"compare to the leader ahead" idea generalizes to interval-collapse problems.

## Interview notes

- **Brute force → optimal:** Simulating positions over time is hopeless. Reducing each car
  to a single "arrival time" and comparing against the car ahead is the insight.
- **Key insight:** process closest-to-target first; a car with `time <= leadTime` is
  absorbed; a strictly larger time starts a new fleet (and becomes the new lead).
- **Edge cases:** one car → 1 fleet; all merge into one; equal arrival times merge (use
  `>` to start a new fleet).
- **Common mistakes:** sorting ascending; using `>=` (equal-time cars should merge, not
  split); integer division losing the tie distinction (use floating-point time).
- **Follow-ups:** *Car Fleet II* (1776) — when each pair collides, harder, uses a stack.
- **Related:** Daily Temperatures (739), Merge Intervals (56).
