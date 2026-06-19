# 131. Palindrome Partitioning

https://leetcode.com/problems/palindrome-partitioning/

- **Difficulty:** Medium
- **Pattern:** Backtracking over prefix cuts
- **Category:** Backtracking
- **Tags:** string, dynamic-programming, backtracking

## Statement

Partition string `s` so that every substring of the partition is a palindrome. Return all
such partitions, in any order.

## Signature

`partition(s: string) -> string[][]`  (any order)

## Constraints

- 1 ≤ s.length ≤ 16; lowercase English letters.

## Approach

Backtrack on a cut position. From `start`, try every prefix `s[start..end]`; if it is a
palindrome, add it to the current partition and recurse from `end+1`. When `start` reaches
the end, record the partition. Undo each choice to explore other cut positions.

## Complexity

- **Time:** O(n · 2^n) — up to 2^(n-1) partitions, each palindrome check O(n).
- **Space:** O(n) recursion depth.

## Pattern

**Partition backtracking.** The signal: split a sequence into valid contiguous pieces and
enumerate all ways. Branch on where the next piece ends, validate the piece, recurse on the
rest. A precomputed palindrome DP table can make the validity check O(1).

## Interview notes

- **Brute force → optimal:** Generating all 2^(n-1) cut sets then filtering is wasteful;
  validating prefixes during backtracking prunes immediately.
- **Key insight:** branch on the end of the current palindromic prefix; recurse on the
  suffix.
- **Edge cases:** single character (one partition); all same character (many partitions);
  no multi-char palindromes.
- **Common mistakes:** off-by-one in the substring/`end+1` recursion; recomputing palindrome
  checks (optimize with a DP table).
- **Follow-ups:** minimum cuts → *Palindrome Partitioning II* (132, DP).
- **Related:** Subsets (78), Word Break (139).
