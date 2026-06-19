# 230. Kth Smallest Element in a BST

https://leetcode.com/problems/kth-smallest-element-in-a-bst/

- **Difficulty:** Medium
- **Pattern:** Inorder traversal (early stop at k)
- **Category:** Trees
- **Tags:** tree, dfs, bst, binary-tree

## Statement

Return the `k`-th smallest value (1-indexed) in a BST.

## Signature

`kthSmallest(root, k) -> number`

> Tested via `kthSmallestArr(vals, k)`.

## Constraints

- 1 ≤ k ≤ number of nodes ≤ 10^4
- 0 ≤ Node.val ≤ 10^4

## Approach

An inorder traversal of a BST visits values in ascending order, so the `k`-th node visited
is the answer. Use an iterative inorder with an explicit stack: go left as far as possible,
pop (that's the next-smallest), decrement `k`, and on reaching 0 return the value;
otherwise move right. This stops as soon as the answer is found.

## Complexity

- **Time:** O(h + k) — descend to the smallest then pop k times.
- **Space:** O(h) for the stack.

## Pattern

**Inorder = sorted order (with early exit).** The signal: order statistics on a BST.
Inorder yields sorted values; track a counter and stop at `k` instead of materializing the
whole traversal. Iterative inorder with a stack is the reusable skeleton.

## Interview notes

- **Brute force → optimal:** A full inorder into a list is O(n)/O(n). The early-stopping
  iterative inorder is O(h + k) time and O(h) space.
- **Key insight:** BST inorder is sorted; count visited nodes and short-circuit at k.
- **Edge cases:** k = 1 (minimum); k = n (maximum); skewed tree.
- **Common mistakes:** 0- vs 1-indexing of k; recursing fully instead of stopping early.
- **Follow-ups:** frequent modifications → augment nodes with subtree sizes for O(h) queries.
- **Related:** Validate BST (98), LCA of a BST (235).
