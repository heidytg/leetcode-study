# 238. Product of Array Except Self

https://leetcode.com/problems/product-of-array-except-self/

- **Difficulty:** Medium
- **Pattern:** Prefix / suffix products
- **Category:** Arrays & Hashing
- **Tags:** array, prefix-product

## Statement

Given an integer array `nums`, return an array `answer` such that `answer[i]` equals the
product of all elements of `nums` except `nums[i]`. Solve it without using division and
in O(n) time.

## Signature

`productExceptSelf(nums: number[]) -> number[]`

## Constraints

- 2 ≤ nums.length ≤ 10^5
- -30 ≤ nums[i] ≤ 30
- The product of any prefix or suffix fits in a 32-bit integer.

## Approach

For each index `i`, the answer is `(product of everything left of i) × (product of
everything right of i)`. Do two sweeps: a left-to-right pass writing the running prefix
product into `res[i]` (before multiplying in `nums[i]`), then a right-to-left pass
multiplying each `res[i]` by the running suffix product. No division needed.

## Complexity

- **Time:** O(n) — two passes.
- **Space:** O(1) extra — the output array does not count; only two scalar accumulators.

## Pattern

**Prefix/suffix accumulation.** The signal: each output depends on "everything except
me," or on a range to the left/right. Precomputing directional running aggregates turns
an O(n²) recompute into O(n). Same idea powers prefix sums and range queries.

## Interview notes

- **Brute force → optimal:** Recomputing each product is O(n²). The division trick is
  O(n) but breaks on a zero (and the problem forbids it) — mention why it's disallowed.
- **Key insight:** answer[i] = prefix[i] × suffix[i]; build both with rolling scalars.
- **Edge cases:** a single zero → only its index is non-zero; two or more zeros → all
  zeros.
- **Common mistakes:** multiplying in `nums[i]` before storing the prefix; using extra
  prefix/suffix arrays when scalars suffice for O(1) space.
- **Follow-ups:** allow division and handle zeros by counting them.
- **Related:** Maximum Product Subarray (152), Range Sum Query (303).
