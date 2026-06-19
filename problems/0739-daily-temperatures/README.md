# 739. Daily Temperatures

https://leetcode.com/problems/daily-temperatures/

- **Difficulty:** Medium
- **Pattern:** Monotonic decreasing stack ("next greater element")
- **Category:** Stack
- **Tags:** array, stack, monotonic-stack

## Statement

Given daily `temperatures`, return an array `answer` where `answer[i]` is the number of
days until a warmer temperature. If no warmer day exists, `answer[i] = 0`.

## Signature

`dailyTemperatures(temperatures: number[]) -> number[]`

## Constraints

- 1 ≤ temperatures.length ≤ 10^5
- 30 ≤ temperatures[i] ≤ 100

## Approach

Keep a stack of indices of days still waiting for a warmer day, with temperatures
decreasing down the stack. For each day `i`, while the day on top of the stack is cooler
than today, pop it and set its answer to `i - poppedIndex` (today is its next warmer
day). Then push `i`. Indices left on the stack at the end never warm up and keep their
default `0`.

## Complexity

- **Time:** O(n) — each index is pushed and popped once.
- **Space:** O(n) — the stack.

## Pattern

**Monotonic stack / next-greater-element.** The signal: for each item find the next (or
previous) item that is greater/smaller. Maintain a stack that stays monotonic by popping
dominated elements; each pop resolves an answer in O(1). Reused by *Next Greater Element*,
*Largest Rectangle in Histogram*, stock spans.

## Interview notes

- **Brute force → optimal:** Scanning forward for each day is O(n²). The monotonic stack
  resolves each day exactly once for O(n).
- **Key insight:** store indices (you need distances); a cooler earlier day is still
  "waiting," a warmer current day resolves all cooler days below it.
- **Edge cases:** strictly decreasing temps → all zeros; strictly increasing → all ones
  except the last; ties (not strictly warmer, so use `<`, not `<=`).
- **Common mistakes:** storing temperatures instead of indices; using `<=` and counting
  equal temps as warmer.
- **Follow-ups:** *Next Greater Element I/II* (496/503, circular), *Online Stock Span* (901).
- **Related:** Largest Rectangle in Histogram (84), Sliding Window Maximum (239).
