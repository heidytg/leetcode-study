# 76. Minimum Window Substring

https://leetcode.com/problems/minimum-window-substring/

- **Difficulty:** Hard
- **Pattern:** Variable-size sliding window with a "have/need" counter
- **Category:** Sliding Window
- **Tags:** string, hash-table, sliding-window

## Statement

Given strings `s` and `t`, return the shortest substring of `s` that contains every
character of `t` (including multiplicities). If no such window exists, return `""`. The
answer is guaranteed unique when it exists.

## Signature

`minWindow(s: string, t: string) -> string`

## Constraints

- 1 ≤ s.length, t.length ≤ 10^5
- `s` and `t` consist of uppercase and lowercase English letters.

## Approach

Count the characters `t` needs. Expand the right edge, decrementing the deficit; track a
`have` counter of how many distinct required characters are fully satisfied. When
`have == required` the window is valid, so contract from the left as far as possible
while staying valid, recording the smallest valid window seen. Continue until the right
edge reaches the end.

## Complexity

- **Time:** O(|s| + |t|) — each character enters and leaves the window once.
- **Space:** O(|t|) — the need/window count maps (O(alphabet)).

## Pattern

**Grow-then-shrink window with a satisfaction counter.** The signal: shortest substring
covering a requirement. Grow the right edge until valid, then greedily shrink the left
edge to minimize, using a `have/required` counter so validity is checked in O(1) rather
than re-scanning counts. The canonical "minimum covering window" template.

## Interview notes

- **Brute force → optimal:** Checking all substrings is O(n²·k). The two-phase window is
  linear.
- **Key insight:** track *how many required characters are satisfied* (`have`), not the
  full count comparison, so each step is O(1); only decrement `have` when a count drops
  below what's needed.
- **Edge cases:** `t` longer than `s` or no valid window → `""`; `s == t`; duplicate
  characters in `t` (multiplicities matter).
- **Common mistakes:** comparing full count maps each step (slower); updating the best
  window before validity; mishandling duplicate requirements.
- **Follow-ups:** stream/very large `s`; minimum window subsequence (727, different).
- **Related:** Longest Substring Without Repeating Characters (3), Permutation in String (567).
