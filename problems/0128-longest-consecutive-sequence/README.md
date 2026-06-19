# 128. Longest Consecutive Sequence

https://leetcode.com/problems/longest-consecutive-sequence/

- **Difficulty:** Medium
- **Pattern:** Hash set + sequence-start detection
- **Category:** Arrays & Hashing
- **Tags:** array, hash-table, union-find

## Statement

Given an unsorted integer array `nums`, return the length of the longest run of
consecutive integers (values differing by 1). The algorithm must run in O(n) time.

## Signature

`longestConsecutive(nums: number[]) -> number`

## Constraints

- 0 ≤ nums.length ≤ 10^5
- -10^9 ≤ nums[i] ≤ 10^9

## Approach

Put all values in a hash set. A number `n` is the *start* of a sequence only if `n - 1`
is not in the set. For each such start, walk upward (`n+1, n+2, …`) counting how far the
run extends, and track the maximum. Because we only count upward from starts, each
element is visited at most twice total, giving O(n).

## Complexity

- **Time:** O(n) — each value is the start check once and walked at most once.
- **Space:** O(n) — the set.

## Pattern

**Hash set with start-anchoring.** The signal: "longest consecutive / contiguous run"
in unsorted data with an O(n) requirement (so sorting is off the table). The trick is
to do work only at sequence boundaries (`n-1` absent) so the inner walk never
double-counts — turning a naive O(n²) into O(n).

## Interview notes

- **Brute force → optimal:** Sorting then scanning runs is O(n log n) — simple and worth
  stating, but it violates the O(n) requirement. The set + start-check is the O(n)
  target answer.
- **Key insight:** only expand from numbers that have no left neighbor; without that
  guard the upward walks repeat work and degrade to O(n²).
- **Edge cases:** empty array → 0; duplicates (the set dedupes them); a single element.
- **Common mistakes:** expanding from every element (quadratic); not deduping.
- **Follow-ups:** Union-Find gives an alternative near-linear solution; good to mention.
- **Related:** Contains Duplicate (217), Number of Connected Components (323).
