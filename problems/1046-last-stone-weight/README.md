# 1046. Last Stone Weight

https://leetcode.com/problems/last-stone-weight/

- **Difficulty:** Easy
- **Pattern:** Max-heap repeated extraction
- **Category:** Heap / Priority Queue
- **Tags:** array, heap, simulation

## Statement

Each turn, smash the two heaviest stones together: if equal, both vanish; otherwise the
lighter is destroyed and the heavier becomes the difference. Return the weight of the last
remaining stone (or 0 if none remain).

## Signature

`lastStoneWeight(stones: number[]) -> number`

## Constraints

- 1 ≤ stones.length ≤ 30
- 1 ≤ stones[i] ≤ 1000

## Approach

A max-heap gives the two largest stones in O(log n) each turn. Pop the top two; if they
differ, push their difference back. Repeat until ≤ 1 stone remains; return it (or 0).

## Complexity

- **Time:** O(n log n) — up to n smashes, each O(log n).
- **Space:** O(n) for the heap.

## Pattern

**Greedy repeated max extraction.** The signal: repeatedly act on the current extreme(s) of
a changing multiset. A heap keeps "give me the largest" at O(log n); re-sorting each turn
would be O(n² log n). The simulation-with-a-heap shape recurs in scheduling and merging.

## Interview notes

- **Brute force → optimal:** Sorting every turn is O(n² log n). The max-heap makes it
  O(n log n).
- **Key insight:** only the two largest matter each turn — exactly what a max-heap serves.
- **Edge cases:** one stone (return it); two equal stones (→ 0); all equal.
- **Common mistakes:** forgetting the empty-heap → 0 case; pushing back when the two are
  equal; min-heap instead of max-heap (negate values if your language lacks a max-heap).
- **Follow-ups:** *Last Stone Weight II* (1049) — a partition/DP problem, very different.
- **Related:** Kth Largest Element in an Array (215).
