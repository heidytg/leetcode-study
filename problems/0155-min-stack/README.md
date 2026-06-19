# 155. Min Stack

https://leetcode.com/problems/min-stack/

- **Difficulty:** Medium
- **Pattern:** Auxiliary "min-so-far" stack
- **Category:** Stack
- **Tags:** stack, design

## Statement

Design a stack supporting `push`, `pop`, `top`, and `getMin`, all in O(1) time.

## Signature

Class `MinStack` with `push(val)`, `pop()`, `top() -> int`, `getMin() -> int`.

> Tested via an operations driver `minStackOps(ops, args)` that replays LeetCode's
> `[operations]` / `[arguments]` lists and returns the per-op outputs (`null` for void
> ops). This lets the design problem run through the same generic fixture harness.

## Constraints

- -2^31 ≤ val ≤ 2^31 - 1
- `pop`, `top`, `getMin` are only called on a non-empty stack.
- Up to 3·10^4 calls total.

## Approach

Keep a second stack, `mins`, parallel to the main stack. On each `push`, push
`min(val, currentMin)` onto `mins`; on each `pop`, pop both. The top of `mins` is always
the minimum of the current stack, so `getMin` is O(1). Every operation is O(1).

## Complexity

- **Time:** O(1) per operation.
- **Space:** O(n) — the auxiliary min stack mirrors the main stack.

## Pattern

**Augment a structure with a running aggregate.** The signal: a data structure must
answer an aggregate query (min/max) in O(1) alongside normal ops. Store the aggregate
*per element* so it pops away naturally with the value it summarized. The same idea
appears in O(1) max-queue designs.

## Interview notes

- **Brute force → optimal:** Scanning for the min on each `getMin` is O(n). The parallel
  min stack makes it O(1) — the expected answer.
- **Key insight:** store the min *as of each push*; it's invalidated automatically on pop.
- **Edge cases:** duplicate minimums (the parallel stack handles repeats correctly);
  pushing a new global min.
- **Common mistakes:** storing a single `min` variable (wrong after the min is popped);
  forgetting to pop `mins` in lockstep.
- **Follow-ups:** O(1) space optimization storing encoded deltas; a min *queue*.
- **Related:** Valid Parentheses (20), Sliding Window Maximum (239).
