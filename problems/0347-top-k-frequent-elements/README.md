# 347. Top K Frequent Elements

https://leetcode.com/problems/top-k-frequent-elements/

- **Difficulty:** Medium
- **Pattern:** Count + bucket sort by frequency
- **Category:** Arrays & Hashing
- **Tags:** array, hash-table, bucket-sort, heap, counting

## Statement

Given an integer array `nums` and an integer `k`, return the `k` most frequent
elements. The answer may be returned in any order. It is guaranteed to be unique.

## Signature

`topKFrequent(nums: number[], k: number) -> number[]`

## Constraints

- 1 ≤ nums.length ≤ 10^5
- k is in the range [1, number of distinct elements]
- The answer is unique.

## Approach

Count occurrences in a hash map. Then bucket sort: create `buckets[freq]` lists where
the index is the frequency (max possible is `len(nums)`). Place each value into the
bucket for its count, then walk buckets from highest frequency down, collecting values
until we have `k`.

## Complexity

- **Time:** O(n) — counting and bucket placement are linear; buckets are bounded by n.
- **Space:** O(n) — counts plus buckets.

## Pattern

**Bucket sort by frequency.** The signal: "top/bottom k by count" with counts bounded
by n. Because frequency can't exceed the array length, indexing by frequency beats a
heap's O(n log k). A heap is the more general fallback when counts are unbounded or k is
tiny relative to n.

## Interview notes

- **Brute force → optimal:** Count then sort by frequency is O(n log n). A max-heap of
  size n is O(n log n); a min-heap of size k is O(n log k). Bucket sort is O(n) — the
  optimal, and the answer interviewers are hoping for.
- **Key insight:** Frequencies are bounded by `n`, so they can be array indices.
- **Edge cases:** k equals the number of distinct elements (return all); single value.
- **Common mistakes:** sizing buckets to `max(nums)` instead of `len(nums)`; forgetting
  counts start at 1 (bucket 0 is unused).
- **Follow-ups:** "k most frequent words with ties broken lexicographically" → heap with
  a custom comparator (LeetCode 692).
- **Related:** Kth Largest Element in an Array (215), Sort Characters by Frequency (451).
