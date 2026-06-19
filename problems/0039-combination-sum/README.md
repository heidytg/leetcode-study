# 39. Combination Sum

https://leetcode.com/problems/combination-sum/

- **Difficulty:** Medium
- **Pattern:** Backtracking with reuse (start index)
- **Category:** Backtracking
- **Tags:** array, backtracking

## Statement

Given distinct `candidates` and a `target`, return all unique combinations that sum to
`target`. Each candidate may be used **unlimited** times. Two combinations are the same if
they use the same multiset of numbers.

## Signature

`combinationSum(candidates: number[], target: number) -> number[][]`  (any order)

## Constraints

- 1 ≤ candidates.length ≤ 30; all distinct.
- 2 ≤ candidates[i] ≤ 40; 1 ≤ target ≤ 40.

## Approach

Backtrack while tracking the remaining target. Pass a `start` index and only consider
candidates from `start` onward — this prevents permutations of the same combination (so
`[2,3]` and `[3,2]` aren't both produced). Since reuse is allowed, recurse with the **same**
index `i` (not `i+1`). Stop when remaining hits 0 (record) or goes negative (prune).

## Complexity

- **Time:** O(2^(target/min)) loosely — bounded by the combination tree size.
- **Space:** O(target/min) recursion depth.

## Pattern

**Combination backtracking with a start pointer.** The signal: choose a multiset summing to
a target with/without reuse. The `start` index enforces nondecreasing picks (canonical
order ⇒ no duplicate combinations). Reuse ⇒ recurse at `i`; single-use ⇒ recurse at `i+1`.

## Interview notes

- **Brute force → optimal:** Generating all sequences then deduping is wasteful. The
  start-index pruning yields only canonical combinations directly.
- **Key insight:** recurse at `i` (reuse) vs `i+1` (no reuse); the start index removes
  permutation duplicates.
- **Edge cases:** no combination (empty result); target smaller than every candidate;
  single candidate dividing target.
- **Common mistakes:** recursing from index 0 (produces permutations/dupes); forgetting the
  negative-remaining prune.
- **Follow-ups:** *Combination Sum II* (40, each used once, dupes in input); *Combination
  Sum III* (216).
- **Related:** Combination Sum II (40), Subsets (78).
