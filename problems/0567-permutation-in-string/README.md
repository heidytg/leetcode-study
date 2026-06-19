# 567. Permutation in String

https://leetcode.com/problems/permutation-in-string/

- **Difficulty:** Medium
- **Pattern:** Fixed-size sliding window + frequency match
- **Category:** Sliding Window
- **Tags:** string, hash-table, sliding-window, two-pointers

## Statement

Given strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1` as a
contiguous substring (i.e. some window of `s2` has the same character counts as `s1`).

## Signature

`checkInclusion(s1: string, s2: string) -> boolean`

## Constraints

- 1 ≤ s1.length, s2.length ≤ 10^4
- `s1` and `s2` consist of lowercase English letters.

## Approach

A permutation of `s1` is any window of length `len(s1)` whose character counts equal
`s1`'s counts. Build the target count array for `s1`. Slide a fixed-size window across
`s2`, adding the entering character and removing the leaving one. Whenever the window's
count array equals the target, return `true`. The 26-length array comparison is O(1).

## Complexity

- **Time:** O(n) — each character enters and leaves the window once; the 26-length
  comparison is constant.
- **Space:** O(1) — two 26-length arrays.

## Pattern

**Fixed-size window anagram match.** The signal: find a contiguous block matching a
target multiset. Unlike the variable-size window, the width is fixed at `len(s1)`, so you
add-one/remove-one each step and compare frequency vectors. Same shape as *Find All
Anagrams in a String* (438).

## Interview notes

- **Brute force → optimal:** Sorting/counting every length-`s1` window independently is
  O(n·k log k) or O(n·k). The rolling window makes it O(n).
- **Key insight:** equal fixed-length window ⇔ equal frequency vectors; maintain them
  incrementally. (A `matches`-counter variant avoids the 26-cell compare for true O(1)
  per step.)
- **Edge cases:** `len(s1) > len(s2)` → immediately `false`; `s1 == s2`; single char.
- **Common mistakes:** comparing counts only at the end; off-by-one when removing the
  character leaving the window.
- **Follow-ups:** return all start indices → *Find All Anagrams in a String* (438).
- **Related:** Valid Anagram (242), Find All Anagrams in a String (438).
