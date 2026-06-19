# 287. Find the Duplicate Number

https://leetcode.com/problems/find-the-duplicate-number/

- **Difficulty:** Medium
- **Pattern:** Floyd's cycle detection on value-as-pointer
- **Category:** Linked List
- **Tags:** array, two-pointers, binary-search, cycle-detection

## Statement

Given `nums` of `n + 1` integers each in `[1, n]`, exactly one value repeats (possibly
many times). Return that duplicate **without modifying the array** and using O(1) extra
space.

## Signature

`findDuplicate(nums: number[]) -> number`

## Constraints

- 1 ≤ n ≤ 10^5; nums.length == n + 1
- 1 ≤ nums[i] ≤ n; exactly one value is repeated.

## Approach

Treat each value as a "next index" pointer: `i → nums[i]`. Because values lie in `[1, n]`
and there are `n + 1` of them, this functional graph must contain a cycle, and the cycle's
entry is the duplicate. Apply Floyd's algorithm: advance slow by one and fast by two until
they meet, then reset one pointer to the start and step both by one — they meet at the
cycle entrance, i.e. the duplicate.

## Complexity

- **Time:** O(n).
- **Space:** O(1) — no modification, no hash set.

## Pattern

**Cycle detection reframed.** The signal: find a duplicate / cycle entry under strict
O(1)-space, no-mutation constraints. Modeling the array as a linked structure
(`i → nums[i]`) turns it into *Linked List Cycle II*. Recognizing this disguise is the
whole trick.

## Interview notes

- **Brute force → optimal:** A hash set is O(n)/O(n); sorting mutates / is O(n log n);
  Floyd's is O(n)/O(1) and read-only — the constraints (no mutation, O(1) space) demand it.
- **Key insight:** the duplicate is the entry of the cycle in the `i → nums[i]` graph;
  phase 1 finds a meeting point, phase 2 finds the entrance.
- **Edge cases:** the duplicate appears many times; minimal array `[1,1]`.
- **Common mistakes:** starting both pointers at the same place in phase 1 without the
  do-while step; mutating the array (marking visited) — violates the constraint.
- **Follow-ups:** binary search on value range (count ≤ mid) is an O(n log n) alternative.
- **Related:** Linked List Cycle II (142), Linked List Cycle (141).
