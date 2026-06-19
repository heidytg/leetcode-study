def validTree(n, edges):
    """Graph Valid Tree — https://leetcode.com/problems/graph-valid-tree/"""
    if len(edges) != n - 1:
        return False  # a tree on n nodes has exactly n-1 edges

    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv:
            return False  # cycle
        parent[ru] = rv
    return True
