# 572. Subtree of Another Tree

https://leetcode.com/problems/subtree-of-another-tree/

- **Difficulty:** Easy
- **Pattern:** Same-tree check at every node
- **Category:** Trees
- **Tags:** tree, dfs, string-matching, hashing

## Statement

Given roots `root` and `subRoot`, return `true` if `subRoot` is a subtree of `root` —
i.e. some node of `root` (with all its descendants) is identical to `subRoot`.

## Signature

`isSubtree(root, subRoot) -> boolean`

> Tested via `isSubtreeArr(rootVals, subVals)`.

## Constraints

- 1 ≤ nodes in root ≤ 2000
- 1 ≤ nodes in subRoot ≤ 1000

## Approach

For each node of `root`, test whether the subtree rooted there is identical to `subRoot`
using a `sameTree` comparison. If any node matches, return true. Recurse into both children
otherwise. An empty `subRoot` is trivially a subtree.

## Complexity

- **Time:** O(m · n) worst case — `sameTree` (O(n)) at each of m nodes. (A serialization +
  string match, e.g. KMP, gives O(m + n).)
- **Space:** O(m) recursion stack.

## Pattern

**Anchor + structural equality.** The signal: "does pattern tree appear inside host tree."
Try to anchor the pattern at each host node and verify with a full equality check.
Recognizing the O(m+n) serialize-then-substring upgrade is the senior-level insight.

## Interview notes

- **Brute force → optimal:** The node-by-node `sameTree` approach is O(m·n) and usually
  accepted. Mention the O(m+n) approach: serialize both trees (with null markers) and run a
  substring search (KMP) — guarding against value-prefix collisions with delimiters.
- **Key insight:** reuse *Same Tree* as the equality primitive; an empty pattern always
  matches.
- **Edge cases:** subRoot equal to the whole tree; subRoot is a single node; values that
  match but structure differs.
- **Common mistakes:** matching on values without structure; missing the empty-subRoot case;
  serialization without delimiters (`12` vs `1,2`).
- **Follow-ups:** the KMP/Merkle-hash O(m+n) method.
- **Related:** Same Tree (100), Symmetric Tree (101).
