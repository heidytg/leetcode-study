# 297. Serialize and Deserialize Binary Tree

https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

- **Difficulty:** Hard
- **Pattern:** Preorder DFS with null markers
- **Category:** Trees
- **Tags:** tree, dfs, bfs, design, string

## Statement

Design `serialize(root) -> string` and `deserialize(string) -> root` so that a tree can be
encoded to a string and decoded back to an identical tree.

## Signature

`serialize(root) -> string` and `deserialize(data) -> TreeNode | null`

> Tested via `codecArr(vals)` doing a `deserialize(serialize(tree))` round-trip and
> comparing the level-order array to the input.

## Constraints

- 0 ≤ number of nodes ≤ 10^4
- -1000 ≤ Node.val ≤ 1000

## Approach

Serialize with a preorder DFS, emitting each node's value and a marker (`#`) for null
children, joined by a delimiter. The null markers make the structure unambiguous.
Deserialize by reading tokens in the same preorder: a value creates a node and recursively
builds its left then right child; a `#` returns null. A shared read pointer walks the token
stream.

## Complexity

- **Time:** O(n) for both directions.
- **Space:** O(n) for the string and recursion.

## Pattern

**Preorder + null sentinels.** The signal: losslessly encode a tree (or restore one).
Recording nulls explicitly removes the ambiguity that prevents reconstruction from values
alone — the same insight that makes preorder+inorder unnecessary here. A BFS encoding works
equally well.

## Interview notes

- **Brute force → optimal:** Storing values without null markers can't be uniquely decoded.
  Preorder-with-sentinels (or level-order with sentinels) is the standard O(n) scheme.
- **Key insight:** null markers + a consistent traversal order on both ends; a single read
  pointer threads deserialization.
- **Edge cases:** empty tree; single node; negative values (delimiter must not clash with
  the minus sign — use commas, not raw concatenation).
- **Common mistakes:** no delimiter (`12` vs `1,2`); mismatched traversal order between
  serialize/deserialize; forgetting null markers.
- **Follow-ups:** serialize a BST more compactly (no null markers needed); N-ary tree (428).
- **Related:** Construct Binary Tree from Preorder and Inorder (105), Subtree of Another Tree (572).
