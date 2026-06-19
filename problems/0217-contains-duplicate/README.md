# 217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

- **Difficulty:** Easy
- **Pattern:** Hash set membership
- **Category:** Arrays & Hashing
- **Tags:** array, hash-table, set

## Statement

Given an integer array `nums`, return `true` if any value appears at least twice, and
`false` if every element is distinct.

## Signature

`containsDuplicate(nums: number[]) -> boolean`

## Constraints

- 1 ≤ nums.length ≤ 10^5
- -10^9 ≤ nums[i] ≤ 10^9

## Approach

Walk the array maintaining a set of values seen so far. Before inserting each value,
check whether it is already present; if so, a duplicate exists. If the loop finishes,
all values were distinct.

## Complexity

- **Time:** O(n) — single pass, O(1) average set ops.
- **Space:** O(n) — the set.

## Pattern

**Hash set for membership / de-duplication.** The signal is "have I seen this before?"
A set turns repeated linear scans into O(1) lookups. This is the most basic
Arrays & Hashing move and the foundation for *Two Sum*, *Longest Consecutive Sequence*,
and most "distinct elements" questions.

## Interview notes

- **Brute force → optimal:** Nested loops comparing all pairs is O(n²)/O(1). Sorting
  then scanning adjacent pairs is O(n log n)/O(1). The set is O(n)/O(n) — the classic
  time-for-space trade.
- **Key insight:** You don't need counts, only presence — a set, not a map.
- **Edge cases:** single element (always `false`); all identical.
- **Common mistakes:** adding before checking still works here, but be deliberate.
- **Follow-ups:** "duplicate within distance k" → sliding-window set (LeetCode 219);
  "return the duplicate" → see *Find the Duplicate Number*.
- **Related:** Two Sum (1), Valid Anagram (242).
