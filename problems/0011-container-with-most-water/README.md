# 11. Container With Most Water

https://leetcode.com/problems/container-with-most-water/

- **Difficulty:** Medium
- **Pattern:** Converging two pointers (greedy move of the shorter wall)
- **Category:** Two Pointers
- **Tags:** array, two-pointers, greedy

## Statement

Given integer array `height` where `height[i]` is a vertical line at position `i`, pick
two lines that together with the x-axis form a container. Return the maximum amount of
water it can hold: `area = (j - i) * min(height[i], height[j])`.

## Signature

`maxArea(height: number[]) -> number`

## Constraints

- 2 ≤ height.length ≤ 10^5
- 0 ≤ height[i] ≤ 10^4

## Approach

Start with the widest container (pointers at both ends). The area is bounded by the
shorter of the two walls, so widening can't help that wall — move the pointer at the
**shorter** wall inward, hoping for a taller one. Track the best area as you converge.
Moving the taller wall could never increase the area (width shrinks, height still capped
by the shorter wall), so it is safe to skip those moves.

## Complexity

- **Time:** O(n) — a single pass with two pointers.
- **Space:** O(1).

## Pattern

**Greedy two-pointer narrowing.** The signal: maximize/optimize over pairs `(i, j)` where
the value depends on the gap and the min/max of endpoints. Begin at the extremes and
greedily discard the endpoint that can't possibly improve the result. The correctness
argument (why moving the shorter wall is safe) is the part interviewers probe.

## Interview notes

- **Brute force → optimal:** All pairs is O(n²). The two-pointer greedy is O(n) — be
  ready to justify *why* moving the shorter side never loses the optimum.
- **Key insight:** area is limited by the shorter wall; advancing it is the only move
  that can raise the bottleneck.
- **Edge cases:** exactly two lines; many equal heights; zeros.
- **Common mistakes:** moving the taller wall; recomputing min incorrectly; off-by-one
  on width `(j - i)`.
- **Follow-ups:** *Trapping Rain Water* (42) — related two-pointer idea but accumulates
  trapped water rather than a single max area.
- **Related:** Trapping Rain Water (42), Two Sum II (167).
