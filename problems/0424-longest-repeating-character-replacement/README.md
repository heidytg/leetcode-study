# 424. Longest Repeating Character Replacement

https://leetcode.com/problems/longest-repeating-character-replacement/

- **Difficulty:** Medium
- **Pattern:** Sliding window keyed on (window size − max frequency)
- **Category:** Sliding Window
- **Tags:** string, hash-table, sliding-window

## Statement

Given a string `s` of uppercase English letters and an integer `k`, you may replace at
most `k` characters with any uppercase letter. Return the length of the longest substring
containing a single repeated letter you can achieve.

## Signature

`characterReplacement(s: string, k: number) -> number`

## Constraints

- 1 ≤ s.length ≤ 10^5
- `s` consists of uppercase English letters.
- 0 ≤ k ≤ s.length

## Approach

A window is valid if the number of characters we'd need to replace —
`windowLength - maxFreq` (where `maxFreq` is the count of the most common letter in the
window) — is `≤ k`. Expand the right edge, updating counts and `maxFreq`. If the window
becomes invalid, advance the left edge once. Track the largest valid window seen.

## Complexity

- **Time:** O(n) — each edge moves forward at most n times.
- **Space:** O(1) — 26-letter count array.

## Pattern

**Window validity via a frequency invariant.** The signal: longest substring where "at
most k edits" makes it uniform. The trick is recognizing the invariant
`size - maxFreq ≤ k`. A subtle optimization: `maxFreq` need not be decreased when the
window shrinks — the answer only grows when a larger `maxFreq` appears, so a stale
`maxFreq` never produces a wrong longer window.

## Interview notes

- **Brute force → optimal:** Trying every substring and counting replacements is O(n²)
  or worse. The window invariant gives O(n).
- **Key insight:** you don't track which letter is dominant, only its count (`maxFreq`).
- **Edge cases:** k = 0 (longest run of one letter); k ≥ length (whole string); single
  character.
- **Common mistakes:** shrinking with `while` and recomputing `maxFreq` every step
  (correct but slower); resetting `maxFreq` on shrink (unnecessary, can hurt clarity).
- **Follow-ups:** generalize to "at most k distinct" windows (340).
- **Related:** Longest Substring Without Repeating Characters (3), Permutation in String (567).
