# 242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

- **Difficulty:** Easy
- **Pattern:** Character frequency counting
- **Category:** Arrays & Hashing
- **Tags:** string, hash-table, sorting, counting

## Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s` (uses exactly
the same characters with the same multiplicities), otherwise `false`.

## Signature

`isAnagram(s: string, t: string) -> boolean`

## Constraints

- 1 ≤ s.length, t.length ≤ 5·10^4
- `s` and `t` consist of lowercase English letters.

## Approach

If the lengths differ they cannot be anagrams. Otherwise build a frequency map from
`s`, then decrement it while scanning `t`. If any character is missing (count hits
zero or below) they are not anagrams. Equal lengths plus never going negative means
the multisets match.

## Complexity

- **Time:** O(n) — two linear passes.
- **Space:** O(1) — at most 26 distinct lowercase letters (O(k) for an alphabet of k).

## Pattern

**Frequency counting.** The signal is "same characters / same multiset." A count map
(or fixed-size array for a known alphabet) compares multisets in linear time. Recurs in
*Group Anagrams*, *Valid Palindrome*, and most string-composition problems.

## Interview notes

- **Brute force → optimal:** Sorting both strings and comparing is O(n log n)/O(1).
  Counting is O(n) time. Mention both; counting wins on time.
- **Key insight:** Anagram ⇔ identical character frequencies.
- **Edge cases:** different lengths (early `false`); empty strings (anagrams of each
  other).
- **Common mistakes:** forgetting the length check; comparing sums of char codes
  (collisions, e.g. `"ad"` vs `"bc"`).
- **Follow-ups:** Unicode input → use a hash map keyed by code point, not a 26-array.
- **Related:** Group Anagrams (49), Valid Palindrome (125).
