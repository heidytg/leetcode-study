# 239. Sliding Window Maximum

https://leetcode.com/problems/sliding-window-maximum/

- **Difficulty:** Hard
- **Pattern:** Monotonic decreasing deque
- **Category:** Sliding Window
- **Tags:** array, queue, sliding-window, monotonic-queue, heap

## Statement

Given an array `nums` and window size `k`, the window slides one position at a time from
left to right. Return an array of the maximum value in each window.

## Signature

`maxSlidingWindow(nums: number[], k: number) -> number[]`

## Constraints

- 1 ≤ nums.length ≤ 10^5
- 1 ≤ k ≤ nums.length
- -10^4 ≤ nums[i] ≤ 10^4

## Approach

Keep a deque of **indices** whose values are in decreasing order. For each new index `i`:
pop indices from the back whose values are `< nums[i]` (they can never be a future max
while `i` is in the window), then push `i`. Pop the front if it has fallen out of the
window (`front <= i - k`). The front index always holds the current window's maximum;
once `i >= k - 1`, record `nums[front]`.

## Complexity

- **Time:** O(n) — each index is pushed and popped at most once.
- **Space:** O(k) — the deque holds at most one window's worth of indices.

## Pattern

**Monotonic deque.** The signal: sliding-window min/max (or "next greater" style queries)
needing O(1) amortized access to an extreme. Maintain a deque that stays sorted by value
by evicting dominated elements from the back. Beats the O(n log k) heap approach because
eviction is O(1) amortized and the front is always the answer.

## Interview notes

- **Brute force → optimal:** Scanning each window is O(n·k). A max-heap of (value, index)
  with lazy deletion is O(n log k). The monotonic deque is O(n)/O(k) — the target.
- **Key insight:** store indices (to detect expiry), and a smaller value behind a larger,
  newer one is useless — drop it.
- **Edge cases:** k = 1 (output equals input); k = n (single max); all equal; negatives.
- **Common mistakes:** storing values instead of indices (can't expire by position);
  recording before the first full window forms (`i >= k - 1`); wrong expiry comparison.
- **Follow-ups:** sliding-window minimum (flip the comparator); *Shortest Subarray with
  Sum at Least K* (862) uses the same deque idea.
- **Related:** Daily Temperatures (739), Largest Rectangle in Histogram (84).
