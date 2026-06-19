# 42. Trapping Rain Water

https://leetcode.com/problems/trapping-rain-water/

- **Difficulty:** Hard
- **Pattern:** Two pointers with running left/right maxima
- **Category:** Two Pointers
- **Tags:** array, two-pointers, dynamic-programming, stack

## Statement

Given `height` representing an elevation map (bar widths of 1), compute how much rain
water is trapped after raining.

## Signature

`trap(height: number[]) -> number`

## Constraints

- 1 ≤ height.length ≤ 2·10^4 (0 allowed if empty inputs are tested)
- 0 ≤ height[i] ≤ 10^5

## Approach

Water above bar `i` is `min(maxLeft[i], maxRight[i]) - height[i]`. Use two pointers with
running maxima `leftMax`, `rightMax`. The smaller of the two maxima is the binding
constraint, so advance that side: water trapped there is fully determined because the
*other* side already has a wall at least as tall. This computes the answer in one pass
with O(1) space — no prefix arrays or stack needed.

## Complexity

- **Time:** O(n) — single pass.
- **Space:** O(1) — two pointers and two scalars.

## Pattern

**Two pointers bounded by running maxima.** The signal: each position's contribution
depends on the max seen to its left *and* right. The insight that the smaller running max
safely determines the current cell lets you collapse the prefix/suffix-max DP (O(n)
space) or the monotonic-stack approach into O(1) space.

## Interview notes

- **Brute force → optimal:** For each bar scan both directions for its maxima — O(n²).
  Precomputing `maxLeft`/`maxRight` arrays gives O(n) time / O(n) space (a great first
  improvement to state). The two-pointer version is O(n)/O(1) — the target. A monotonic
  stack is an alternative O(n)/O(n).
- **Key insight:** advance the pointer on the side with the smaller running max; that
  cell's water is then fully determined by that max.
- **Edge cases:** empty or single bar (0); monotonic ramps trap nothing.
- **Common mistakes:** updating the running max after adding water; advancing the wrong
  (larger-max) side; integer overflow in other languages (fine in Python/JS).
- **Follow-ups:** 2-D version → *Trapping Rain Water II* (407, heap + BFS).
- **Related:** Container With Most Water (11), Largest Rectangle in Histogram (84).
