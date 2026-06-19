# 46. Permutations

https://leetcode.com/problems/permutations/

- **Difficulty:** Medium
- **Pattern:** Backtracking over remaining choices
- **Category:** Backtracking
- **Tags:** array, backtracking

## Statement

Given an array `nums` of distinct integers, return all possible permutations, in any order.

## Signature

`permute(nums: number[]) -> number[][]`  (any order of permutations; each permutation's
order is significant)

## Constraints

- 1 ≤ nums.length ≤ 6; all distinct.

## Approach

Build a permutation position by position. At each step choose any not-yet-used element,
append it, recurse on the rest, then undo the choice. When the current arrangement uses all
elements, record a copy. Track usage via a remaining list (or a used[] boolean array).

## Complexity

- **Time:** O(n · n!) — n! permutations, O(n) to build/copy each.
- **Space:** O(n) recursion depth (plus output).

## Pattern

**Permutation backtracking.** The signal: enumerate all orderings. Unlike combinations
(where a start index forbids revisiting), permutations may pick any unused element at each
step — the difference between "order matters" and "order doesn't." Mark used, recurse, unmark.

## Interview notes

- **Brute force → optimal:** Optimal — there are n! permutations to produce; the choice is
  remaining-list vs in-place swapping (O(1) extra).
- **Key insight:** "any unused element" per position (vs the start-index restriction of
  combinations).
- **Edge cases:** single element; the in-place swap variant must restore order on backtrack.
- **Common mistakes:** reusing elements; appending the live array instead of a copy; not
  undoing the swap.
- **Follow-ups:** permutations with duplicates (47, sort + skip); next permutation (31).
- **Related:** Subsets (78), Permutations II (47).
