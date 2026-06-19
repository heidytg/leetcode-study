# 125. Valid Palindrome

https://leetcode.com/problems/valid-palindrome/

- **Difficulty:** Easy
- **Pattern:** Converging two pointers
- **Category:** Two Pointers
- **Tags:** string, two-pointers

## Statement

A phrase is a palindrome if, after lowercasing and removing all non-alphanumeric
characters, it reads the same forward and backward. Given a string `s`, return `true`
if it is a palindrome.

## Signature

`isPalindrome(s: string) -> boolean`

## Constraints

- 1 ≤ s.length ≤ 2·10^5
- `s` consists of printable ASCII characters.

## Approach

Two pointers from both ends moving inward. Skip any non-alphanumeric character on either
side, then compare the two characters case-insensitively. If they ever differ it is not a
palindrome; if the pointers cross, it is. This avoids building a filtered copy of the
string, keeping extra space at O(1).

## Complexity

- **Time:** O(n) — each pointer traverses the string once.
- **Space:** O(1) — comparison in place (O(n) only if you build a cleaned copy first).

## Pattern

**Converging two pointers.** The signal: compare/validate from both ends of a linear
structure (palindrome check, reversing, pairing). One pointer from each end moving toward
the center is O(n)/O(1) and avoids extra allocation. The in-place skip of irrelevant
characters is the reusable detail here.

## Interview notes

- **Brute force → optimal:** Filtering to a cleaned string then comparing it to its
  reverse is O(n)/O(n). Two pointers do it in O(1) space — state both.
- **Key insight:** filter while you walk, don't pre-build; compare case-folded.
- **Edge cases:** string that is all punctuation (`",."` → empty → `true`); single char;
  mixed digits/letters like `"0P"` (`false`).
- **Common mistakes:** forgetting to lowercase; advancing only one side's skip loop;
  skipping past `right` without the `left < right` guard.
- **Follow-ups:** allow at most one deletion → *Valid Palindrome II* (680).
- **Related:** Two Sum II (167), Reverse String (344).
