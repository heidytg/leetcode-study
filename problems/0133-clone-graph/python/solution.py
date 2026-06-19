from collections import deque


class Node:
    def __init__(self, val):
        self.val = val
        self.neighbors = []


def cloneGraph(node):
    """Clone Graph — https://leetcode.com/problems/clone-graph/"""
    if not node:
        return None
    clones = {}

    def dfs(n):
        if n in clones:
            return clones[n]
        copy = Node(n.val)
        clones[n] = copy
        for nb in n.neighbors:
            copy.neighbors.append(dfs(nb))
        return copy

    return dfs(node)


def cloneGraphArr(adj_list):
    n = len(adj_list)
    if n == 0:
        return []
    nodes = [Node(i + 1) for i in range(n)]
    for i, neighbors in enumerate(adj_list):
        nodes[i].neighbors = [nodes[v - 1] for v in neighbors]
    cloned = cloneGraph(nodes[0])
    result = [[] for _ in range(n)]
    visited = {cloned.val}
    queue = deque([cloned])
    while queue:
        cur = queue.popleft()
        result[cur.val - 1] = [nb.val for nb in cur.neighbors]
        for nb in cur.neighbors:
            if nb.val not in visited:
                visited.add(nb.val)
                queue.append(nb)
    return result
