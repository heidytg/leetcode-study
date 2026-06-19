# 875. Koko Eating Bananas

https://leetcode.com/problems/koko-eating-bananas/

- **Difficulty:** Medium
- **Pattern:** Binary search on the answer space
- **Category:** Binary Search
- **Tags:** array, binary-search

## Statement

Koko has `piles` of bananas and `h` hours. Each hour she eats up to `k` bananas from one
pile (if the pile has fewer, she finishes it and waits). Return the minimum integer
eating speed `k` that lets her finish all piles within `h` hours.

## Signature

`minEatingSpeed(piles: number[], h: number) -> number`

## Constraints

- 1 ≤ piles.length ≤ 10^4
- piles.length ≤ h ≤ 10^9
- 1 ≤ piles[i] ≤ 10^9

## Approach

The hours needed is monotonic in `k`: faster eating never needs more hours. So binary
search `k` over `[1, max(piles)]`. For a candidate `k`, hours = `Σ ceil(pile / k)`. If
that's `≤ h`, `k` is feasible — try smaller (`hi = k`); otherwise too slow (`lo = k+1`).
Converge to the smallest feasible `k`.

## Complexity

- **Time:** O(n · log(max(piles))) — each feasibility check is O(n).
- **Space:** O(1).

## Pattern

**Binary search on the answer.** The signal: "minimum/maximum value such that a feasibility
predicate holds," where the predicate is monotonic in that value. You don't search an
array — you search the *value range*, using an O(n) check per candidate. Powers capacity/
rate problems (ship within D days, split array largest sum, etc.).

## Interview notes

- **Brute force → optimal:** Trying every speed from 1 upward is O(max(piles)·n). Binary
  search on speed makes it O(n·log(max)).
- **Key insight:** identify the monotonic predicate ("can finish in ≤ h hours at speed k")
  and that the answer lives in `[1, max(piles)]`.
- **Edge cases:** `h == len(piles)` → must eat the biggest pile in one hour → `k =
  max(piles)`; single pile; huge piles needing 64-bit hour sums.
- **Common mistakes:** wrong search bounds; integer ceiling done as `(p + k - 1) / k`;
  hour-sum overflow in fixed-width languages.
- **Follow-ups:** *Capacity to Ship Packages in D Days* (1011), *Split Array Largest
  Sum* (410) — same template.
- **Related:** Binary Search (704), Split Array Largest Sum (410).
