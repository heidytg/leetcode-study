from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def to_level(root):
    if not root:
        return []
    out = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node:
            out.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            out.append(None)
    while out and out[-1] is None:
        out.pop()
    return out


def buildTree(preorder, inorder):
    """Construct Binary Tree from Preorder and Inorder — https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"""
    index = {v: i for i, v in enumerate(inorder)}
    pre = [0]

    def helper(left, right):
        if left > right:
            return None
        val = preorder[pre[0]]
        pre[0] += 1
        node = TreeNode(val)
        mid = index[val]
        node.left = helper(left, mid - 1)
        node.right = helper(mid + 1, right)
        return node

    return helper(0, len(inorder) - 1)


def buildTreeArr(preorder, inorder):
    return to_level(buildTree(preorder, inorder))
