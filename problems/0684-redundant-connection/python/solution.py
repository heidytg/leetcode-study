def findRedundantConnection(edges):
    """Redundant Connection — https://leetcode.com/problems/redundant-connection/"""
    parent = list(range(len(edges) + 1))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]  # path compression
            x = parent[x]
        return x

    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv:
            return [u, v]  # already connected -> this edge closes a cycle
        parent[ru] = rv
    return []
