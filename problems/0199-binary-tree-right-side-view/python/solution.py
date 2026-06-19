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


def rightSideView(root):
    """Binary Tree Right Side View — https://leetcode.com/problems/binary-tree-right-side-view/"""
    if not root:
        return []
    res = []
    queue = deque([root])
    while queue:
        n = len(queue)
        for i in range(n):
            node = queue.popleft()
            if i == n - 1:
                res.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return res


def rightSideViewArr(vals):
    return rightSideView(from_level(vals))
