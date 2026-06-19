# 1. Two Sum

https://leetcode.com/problems/two-sum/

- **Difficulty:** Easy
- **Pattern:** Hash map for O(1) complement lookup
- **Category:** Arrays & Hashing
- **Tags:** array, hash-table

## Statement

Given an array of integers `nums` and an integer `target`, return the indices of the
two numbers that add up to `target`. Exactly one valid answer exists, and you may not
use the same element twice. The answer may be returned in any order.

## Signature

`twoSum(nums: number[], target: number) -> number[]`

## Constraints

- 2 ≤ nums.length ≤ 10^4
- -10^9 ≤ nums[i] ≤ 10^9
- -10^9 ≤ target ≤ 10^9
- Exactly one valid answer exists.

## Approach

Single pass with a hash map from value → index. For each `n` at index `i`, the number
we still need is `complement = target - n`. If `complement` is already in the map, we
have found the pair and return `[map[complement], i]`. Otherwise store `n → i` and move
on. We check before inserting, which guarantees we never pair an element with itself.

## Complexity

- **Time:** O(n) — one pass, each lookup/insert is O(1) average.
- **Space:** O(n) — up to n entries in the map.

## Pattern

**Hash map for complement lookup.** The signal: "find two elements with a fixed
relationship (sum/difference)" plus "return them in one pass." Trading space for time
to turn a nested-loop search into O(1) membership checks is the core Arrays & Hashing
move — it also underpins *Contains Duplicate*, *Valid Anagram*, and *Group Anagrams*.

## Interview notes

- **Brute force → optimal:** The naive solution is two nested loops, O(n²) time /
  O(1) space. State that first, then improve to the hash-map O(n)/O(n) — interviewers
  want to see the trade-off articulated.
- **Key insight:** You don't need both numbers at once — store what you've seen and
  ask "have I already seen what would complete me?"
- **Edge cases:** negative numbers and the same value appearing twice (`[3,3]`,
  target 6) — checking the map *before* inserting handles the "no reuse" rule.
- **Common mistakes:** inserting into the map before checking (lets an element pair
  with itself); assuming the array is sorted.
- **Follow-ups:** What if the array is sorted? → two-pointer, O(1) space (*Two Sum II*).
  What if there are multiple pairs / you must return all unique pairs? → see *3Sum*.
- **Related:** Two Sum II (167), 3Sum (15), 4Sum (18).
