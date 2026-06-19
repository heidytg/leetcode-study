# 17. Letter Combinations of a Phone Number

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

- **Difficulty:** Medium
- **Pattern:** Backtracking over a Cartesian product
- **Category:** Backtracking
- **Tags:** hash-table, string, backtracking

## Statement

Given digits `2-9`, return all letter combinations the number could spell (phone keypad
mapping). Return in any order; empty input → empty list.

## Signature

`letterCombinations(digits: string) -> string[]`  (any order)

## Constraints

- 0 ≤ digits.length ≤ 4; digits are `2`–`9`.

## Approach

Map each digit to its letters. Backtrack position by position: at digit index `i`, append
each candidate letter and recurse to `i+1`; record the string when all digits are consumed.
This enumerates the Cartesian product of the per-digit letter sets.

## Complexity

- **Time:** O(4^n · n) — up to 4 letters per digit, n digits, O(n) to build each string.
- **Space:** O(n) recursion depth.

## Pattern

**Cartesian-product backtracking.** The signal: combine one choice from each of several
independent option sets. Recurse one position at a time over the per-position options — the
template for keypad strings, dice rolls, and grid-of-choices enumeration.

## Interview notes

- **Brute force → optimal:** This is optimal — output size is the product of set sizes;
  iterative BFS building partial strings is an equivalent alternative.
- **Key insight:** independent choice per digit ⇒ product; empty input is a special case
  (return `[]`, not `[""]`).
- **Edge cases:** empty digits; single digit; all `7`/`9` (four letters each).
- **Common mistakes:** returning `[""]` for empty input; wrong keypad mapping (7→pqrs,
  9→wxyz).
- **Follow-ups:** iterative product; weight/rank combinations.
- **Related:** Subsets (78), Combinations (77).
