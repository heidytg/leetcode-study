# 981. Time Based Key-Value Store

https://leetcode.com/problems/time-based-key-value-store/

- **Difficulty:** Medium
- **Pattern:** Per-key sorted list + binary search on timestamp
- **Category:** Binary Search
- **Tags:** hash-table, binary-search, design

## Statement

Design `TimeMap`: `set(key, value, timestamp)` stores a value at a time, and
`get(key, timestamp)` returns the value with the **largest** stored timestamp `≤
timestamp` (or `""` if none). Timestamps for a given key are strictly increasing across
`set` calls.

## Signature

Class `TimeMap` with `set(key, value, timestamp)` and `get(key, timestamp) -> string`.

> Tested via the driver `timeMapOps(ops, args)` replaying LeetCode's `[operations]` /
> `[arguments]` lists (`null` for void ops), so it runs through the generic harness.

## Constraints

- 1 ≤ key.length, value.length ≤ 100
- 1 ≤ timestamp ≤ 10^7; strictly increasing per key.
- Up to 2·10^5 calls.

## Approach

Store, per key, a list of `(timestamp, value)` appended in `set`. Because timestamps are
strictly increasing, each list stays sorted, so `get` is a binary search for the rightmost
entry with `timestamp ≤ query` — return its value, or `""` if every entry is later.

## Complexity

- **Time:** `set` O(1) amortized; `get` O(log n) for that key.
- **Space:** O(total set calls).

## Pattern

**Bucketed sorted history + binary search.** The signal: versioned/temporal lookups —
"value as of time T." Keep an append-ordered (hence sorted) history per key and binary
search it. The rightmost-`≤`-target search is the `bisect_right - 1` / `upper_bound`
idiom.

## Interview notes

- **Brute force → optimal:** Scanning a key's history per `get` is O(n). The sorted-list
  binary search makes `get` O(log n).
- **Key insight:** the strictly-increasing-timestamp guarantee means no sorting is
  needed; appends keep order.
- **Edge cases:** `get` before any `set` for the key (`""`); query earlier than all
  stored timestamps (`""`); exact timestamp match.
- **Common mistakes:** returning the smallest ≥ instead of largest ≤; off-by-one keeping
  the candidate while moving `lo = mid + 1`.
- **Follow-ups:** allow out-of-order timestamps → keep sorted by insertion; range queries.
- **Related:** Binary Search (704), Search a 2D Matrix (74).
