# 621. Task Scheduler

https://leetcode.com/problems/task-scheduler/

- **Difficulty:** Medium
- **Pattern:** Greedy frequency counting (fill idle slots)
- **Category:** Heap / Priority Queue
- **Tags:** array, hash-table, greedy, sorting, heap, counting, math

## Statement

Given `tasks` (letters) and a cooldown `n` (identical tasks must be ≥ `n` apart), return
the minimum number of time units (including idles) to finish all tasks.

## Signature

`leastInterval(tasks: string[], n: number) -> number`

## Constraints

- 1 ≤ tasks.length ≤ 10^4
- 0 ≤ n ≤ 100

## Approach

The most frequent task dictates the schedule's skeleton. With max frequency `f`, lay out
`f-1` full frames of length `n+1`, then append the final occurrences of all max-frequency
tasks. That's `(f-1)·(n+1) + maxCount`. If there are so many distinct tasks that no idling
is needed, the answer is simply `len(tasks)`. Take the max of the two.

## Complexity

- **Time:** O(n) — count tasks, scan frequencies (alphabet bounded).
- **Space:** O(1) — at most 26 counts.

## Pattern

**Greedy schedule from the bottleneck.** The signal: schedule with cooldown / spacing
constraints. Anchor on the most frequent element (the bottleneck), compute the forced idle
structure with a formula, then correct upward when the task pool fills the gaps. A heap
simulation works too but the formula is O(n).

## Interview notes

- **Brute force → optimal:** Simulating with a max-heap each tick is O(T log 26); the
  closed-form count is O(T). Both are fine; the formula is the elegant answer.
- **Key insight:** `(maxFreq-1)*(n+1) + (#tasks at maxFreq)`, floored by `len(tasks)` when
  there's no need to idle.
- **Edge cases:** n = 0 (answer = len(tasks)); all tasks distinct; one task type repeated.
- **Common mistakes:** forgetting the `max(len(tasks), …)` floor; counting ties at max
  frequency incorrectly.
- **Follow-ups:** return an actual valid ordering (needs the heap simulation).
- **Related:** Reorganize String (767), Top K Frequent Elements (347).
