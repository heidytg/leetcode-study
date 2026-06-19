# 146. LRU Cache

https://leetcode.com/problems/lru-cache/

- **Difficulty:** Medium
- **Pattern:** Hash map + doubly linked list (ordered dict)
- **Category:** Linked List
- **Tags:** hash-table, linked-list, design, doubly-linked-list

## Statement

Design a cache with capacity `c` supporting `get(key)` and `put(key, value)` in O(1)
average time. `get` returns the value or `-1`. `put` inserts/updates and, if over
capacity, evicts the least-recently-used entry. Both operations count as "use".

## Signature

Class `LRUCache(capacity)` with `get(key) -> int` and `put(key, value)`.

> Tested via `lruCacheOps(ops, args)` replaying LeetCode's `[operations]` / `[arguments]`
> lists (`null` for void ops).

## Constraints

- 1 ≤ capacity ≤ 3000
- 0 ≤ key, value ≤ 10^4; up to 2·10^5 calls.

## Approach

Combine a hash map (key → node) with a doubly linked list ordered by recency: most-recently
used at the front, least-recently used at the back. `get` looks up the node and moves it to
the front. `put` updates-and-moves or inserts at the front, evicting the back node when over
capacity. The map gives O(1) lookup; the linked list gives O(1) reorder/evict. (Languages
with an insertion-ordered map — Python `OrderedDict`, JS `Map` — can lean on it instead of a
hand-rolled list.)

## Complexity

- **Time:** O(1) average for both operations.
- **Space:** O(capacity).

## Pattern

**Map + recency list.** The signal: O(1) access *and* O(1) eviction by an ordering
(recency, frequency). Pair a hash map for lookup with a linked list (or ordered map) for the
ordering. The template behind LRU/LFU cache designs.

## Interview notes

- **Brute force → optimal:** A plain map needs O(n) to find the LRU entry on eviction. The
  doubly linked list makes eviction and reordering O(1).
- **Key insight:** the node must be reachable from the map *and* unlinkable in O(1) — hence
  a doubly linked list storing the key (so eviction can delete the map entry too).
- **Edge cases:** updating an existing key (move, don't grow); capacity 1; `get` on a
  missing key.
- **Common mistakes:** forgetting that `get` counts as a use; deleting the wrong end;
  not storing the key in the node (can't clean the map on eviction).
- **Follow-ups:** LFU Cache (460); thread-safe variant.
- **Related:** Min Stack (155), LFU Cache (460).
