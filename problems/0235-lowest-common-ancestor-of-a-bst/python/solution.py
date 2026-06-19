from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def from_level(vals):
    if not vals or vals[0] is None:
        return None
    root = TreeNode(vals[0])
    queue = deque([root])
    i = 1
    while queue and i < len(vals):
        node = queue.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i])
            queue.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i])
            queue.append(node.right)
        i += 1
    return root


def lowestCommonAncestor(root, p, q):
    """LCA of a BST — https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"""
    cur = root
    while cur:
        if p > cur.val and q > cur.val:
            cur = cur.right
        elif p < cur.val and q < cur.val:
            cur = cur.left
        else:
            return cur
    return None


def lcaArr(vals, p, q):
    return lowestCommonAncestor(from_level(vals), p, q).val
