# 84. Largest Rectangle in Histogram

https://leetcode.com/problems/largest-rectangle-in-histogram/

- **Difficulty:** Hard
- **Pattern:** Monotonic increasing stack
- **Category:** Stack
- **Tags:** array, stack, monotonic-stack

## Statement

Given `heights` representing bar heights of a histogram (each width 1), return the area
of the largest rectangle that fits entirely within the histogram.

## Signature

`largestRectangleArea(heights: number[]) -> number`

## Constraints

- 1 ≤ heights.length ≤ 10^5
- 0 ≤ heights[i] ≤ 10^4

## Approach

Maintain a stack of `(startIndex, height)` pairs in increasing height. When the current
bar is shorter than the stack top, that taller bar can't extend further right — pop it and
compute its area `height * (i - startIndex)`, where `startIndex` is how far left this bar
could have stretched. Carry that `startIndex` down so the current bar inherits the left
reach of the bars it dominated. After the scan, bars left on the stack extend to the end.

## Complexity

- **Time:** O(n) — each bar is pushed and popped once.
- **Space:** O(n) — the stack.

## Pattern

**Monotonic stack for span/extent.** The signal: each element's contribution depends on
how far it extends until a smaller element on each side. The increasing stack lets each
pop know its right boundary (current `i`) and left boundary (inherited start) in O(1).
The same machinery solves *Maximal Rectangle* (row by row) and trapping water.

## Interview notes

- **Brute force → optimal:** For each bar, expand left/right to its limits — O(n²). Or
  precompute previous/next-smaller indices — O(n)/O(n). The single monotonic stack does it
  in one pass, O(n).
- **Key insight:** when popping a taller bar, the current index is its right edge and the
  inherited `start` is its left edge; the popped bar's start becomes the new bar's start.
- **Edge cases:** strictly increasing (everything flushed at the end); a single bar; equal
  heights; zeros splitting the histogram.
- **Common mistakes:** forgetting to process the leftover stack after the loop;
  mishandling the inherited start index (off-by-one on width).
- **Follow-ups:** *Maximal Rectangle* (85) applies this per row over a binary matrix.
- **Related:** Trapping Rain Water (42), Daily Temperatures (739).
