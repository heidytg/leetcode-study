# 3. Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

- **Difficulty:** Medium
- **Pattern:** Variable-size sliding window + last-seen map
- **Category:** Sliding Window
- **Tags:** string, hash-table, sliding-window

## Statement

Given a string `s`, return the length of the longest substring without repeating
characters.

## Signature

`lengthOfLongestSubstring(s: string) -> number`

## Constraints

- 0 ≤ s.length ≤ 5·10^4
- `s` consists of English letters, digits, symbols, and spaces.

## Approach

Maintain a window `[start, i]` containing only distinct characters. Store each
character's last index. When the current char `c` was seen at an index `≥ start`, jump
`start` to `last[c] + 1` to drop the earlier occurrence. Update `last[c] = i` and track
the max window length `i - start + 1`. Each index is processed once.

## Complexity

- **Time:** O(n) — single pass; the window edges only move forward.
- **Space:** O(min(n, alphabet)) — the last-seen map.

## Pattern

**Variable-size sliding window.** The signal: longest/shortest contiguous substring
satisfying a constraint ("all distinct"). Expand the right edge greedily; when the
constraint breaks, advance the left edge just enough to restore it. The last-seen index
lets the left edge jump in O(1) instead of stepping.

## Interview notes

- **Brute force → optimal:** Checking every substring for distinctness is O(n²)–O(n³).
  The sliding window is O(n).
- **Key insight:** never move `start` backward — guard with `last[c] >= start` so stale
  indices outside the window don't shrink it incorrectly.
- **Edge cases:** empty string (0); all identical (1); no repeats (full length); spaces.
- **Common mistakes:** forgetting the `>= start` guard; using a set and stepping the left
  pointer one-by-one (still O(n) but missing the jump optimization).
- **Follow-ups:** at most k distinct characters (340); longest with at most two distinct
  (159).
- **Related:** Longest Repeating Character Replacement (424), Minimum Window Substring (76).
