# 121. Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

- **Difficulty:** Easy
- **Pattern:** One-pass min tracking (implicit sliding window)
- **Category:** Sliding Window
- **Tags:** array, dynamic-programming

## Statement

`prices[i]` is the price of a stock on day `i`. Buy on one day and sell on a later day.
Return the maximum profit, or `0` if no profitable transaction exists.

## Signature

`maxProfit(prices: number[]) -> number`

## Constraints

- 1 ≤ prices.length ≤ 10^5
- 0 ≤ prices[i] ≤ 10^4

## Approach

Sweep left to right tracking the **minimum price seen so far** (the best buy day up to
now). At each day, the best profit if selling today is `price - minSoFar`; keep the
running maximum of that. One pass, constant space. The "window" is implicit: its left
edge is the running minimum, its right edge is the current day.

## Complexity

- **Time:** O(n) — single pass.
- **Space:** O(1).

## Pattern

**Running-extreme single pass.** The signal: maximize `value[j] - value[i]` for `i < j`.
Carry the best `value[i]` seen so far so each `j` is evaluated in O(1). This "best so far
+ current" framing generalizes to many DP-on-arrays problems (e.g. *Maximum Subarray*).

## Interview notes

- **Brute force → optimal:** Checking every buy/sell pair is O(n²). Tracking the running
  min collapses it to O(n)/O(1).
- **Key insight:** you only ever need the cheapest price *before* the current day.
- **Edge cases:** strictly decreasing prices → profit 0; single day → 0.
- **Common mistakes:** allowing sell before buy; resetting profit when a new min is found
  (the min update and profit update are independent).
- **Follow-ups:** multiple transactions (122), with cooldown (309), at most k (188) — a
  DP ladder built on this base.
- **Related:** Maximum Subarray (53).
