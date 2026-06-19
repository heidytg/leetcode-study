# 49. Group Anagrams

https://leetcode.com/problems/group-anagrams/

- **Difficulty:** Medium
- **Pattern:** Hash map keyed by a canonical signature
- **Category:** Arrays & Hashing
- **Tags:** string, hash-table, sorting, counting

## Statement

Given an array of strings `strs`, group the anagrams together. Return the groups in
any order; the strings within each group may also be in any order.

## Signature

`groupAnagrams(strs: string[]) -> string[][]`

## Constraints

- 1 ≤ strs.length ≤ 10^4
- 0 ≤ strs[i].length ≤ 100
- `strs[i]` consists of lowercase English letters.

## Approach

Two anagrams share the same multiset of characters, so they map to the same canonical
key. Use the sorted string as the key (`"eat" → "aet"`) and bucket each word into a map
from key → list of words. The map's values are the groups.

## Complexity

- **Time:** O(n · k log k) — n words, sorting each length-k word. Using a 26-length
  count signature instead of sorting gives O(n · k).
- **Space:** O(n · k) — all words stored across the buckets.

## Pattern

**Canonical-key bucketing.** The signal: "group items that are equivalent under some
transform." Pick a key that is identical for equivalent items (here, sorted letters or
a letter-count tuple) and bucket by it in a hash map. The same idea groops shifted
strings, isomorphic words, etc.

## Interview notes

- **Brute force → optimal:** Comparing every pair for anagram-ness is O(n²·k). Keying
  by signature makes it ~linear in total input size.
- **Key insight:** A frequency-count tuple `(c0..c25)` is an O(k) key — faster than the
  O(k log k) sorted-string key, and a strong thing to mention.
- **Edge cases:** empty string `""` forms its own group; single word.
- **Common mistakes:** using a non-canonical key; mutating a shared list reference.
- **Follow-ups:** Unicode → count map keyed by code point. Streaming input → same map,
  emit groups at the end.
- **Related:** Valid Anagram (242), Top K Frequent Elements (347).
