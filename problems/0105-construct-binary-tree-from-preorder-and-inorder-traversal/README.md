# 105. Construct Binary Tree from Preorder and Inorder Traversal

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

- **Difficulty:** Medium
- **Pattern:** Recursive divide using preorder root + inorder split
- **Category:** Trees
- **Tags:** array, hash-table, divide-and-conquer, tree

## Statement

Given `preorder` and `inorder` traversals of a binary tree with **unique** values,
reconstruct and return the tree.

## Signature

`buildTree(preorder, inorder) -> TreeNode | null`

> Tested via `buildTreeArr(preorder, inorder)`, comparing the serialized level-order result.

## Constraints

- 1 ≤ preorder.length == inorder.length ≤ 3000
- All values unique; `inorder` is a permutation of `preorder`.

## Approach

The first element of `preorder` is the root. Find it in `inorder`: everything to its left
forms the left subtree, everything to its right the right subtree. Consume preorder
elements left-to-right with a moving pointer and recurse on the inorder index ranges. A
hash map from value → inorder index makes the split O(1).

## Complexity

- **Time:** O(n) — each node built once, O(1) index lookups.
- **Space:** O(n) — the index map plus recursion.

## Pattern

**Reconstruct from traversals.** The signal: rebuild a tree from order sequences.
Preorder gives the next root; inorder partitions the remaining nodes into the two subtrees.
The value→index map is the key optimization over scanning inorder each time.

## Interview notes

- **Brute force → optimal:** Scanning inorder for each root is O(n²); the index map makes
  it O(n).
- **Key insight:** advance one shared preorder pointer (don't slice arrays) and recurse on
  inorder ranges.
- **Edge cases:** single node; left- or right-skewed tree; the recursion bounds when a
  subtree is empty (`left > right`).
- **Common mistakes:** rescanning inorder (O(n²)); slicing arrays (extra O(n) copies);
  building right before consuming the left subtree's preorder.
- **Follow-ups:** build from inorder + postorder (106); from preorder + postorder (889).
- **Related:** Serialize and Deserialize Binary Tree (297).
