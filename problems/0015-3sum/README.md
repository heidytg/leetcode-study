# 15. 3Sum

https://leetcode.com/problems/3sum/

- **Difficulty:** Medium
- **Pattern:** Sort + converging two pointers (fix one, pair the rest)
- **Category:** Two Pointers
- **Tags:** array, two-pointers, sorting

## Statement

Given an integer array `nums`, return all unique triplets `[a, b, c]` such that
`a + b + c == 0`. The solution set must not contain duplicate triplets. Triplets and the
overall list may be in any order.

## Signature

`threeSum(nums: number[]) -> number[][]`

## Constraints

- 3 ≤ nums.length ≤ 3000
- -10^5 ≤ nums[i] ≤ 10^5

## Approach

Sort the array. Fix each element `nums[i]` as the smallest of the triplet, then run the
*Two Sum II* converging two-pointer search on the remainder for a pair summing to
`-nums[i]`. Skip duplicate values for `i` and after each found pair to keep triplets
unique. Once `nums[i] > 0`, no triplet can sum to zero, so stop early.

## Complexity

- **Time:** O(n²) — sort is O(n log n); each fixed `i` runs an O(n) two-pointer scan.
- **Space:** O(1) extra (or O(n) depending on the sort), excluding the output.

## Pattern

**Reduce-by-one + two pointers.** The signal: k-sum on an array. Fix one element and the
problem drops to (k-1)-sum; at k=2 the sorted two-pointer scan closes it. Duplicate-
skipping on the sorted array is what makes the result set unique without a hash set.

## Interview notes

- **Brute force → optimal:** Three nested loops are O(n³); using a hash set per pair is
  O(n²) time but O(n) space and fiddly for dedup. Sort + two pointers is O(n²)/O(1) and
  dedups naturally — the expected answer.
- **Key insight:** sorting enables both the two-pointer move and easy duplicate skipping.
- **Edge cases:** all zeros `[0,0,0]` → one triplet; no solution → empty list; many
  duplicates.
- **Common mistakes:** not skipping duplicates (returns repeated triplets); skipping
  before recording a valid triplet; forgetting the early `nums[i] > 0` break.
- **Follow-ups:** *4Sum* (18) — fix two, two-pointer the rest; *3Sum Closest* (16).
- **Related:** Two Sum II (167), 4Sum (18).
