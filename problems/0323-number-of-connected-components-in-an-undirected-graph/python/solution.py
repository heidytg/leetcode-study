def countComponents(n, edges):
    """Number of Connected Components — https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"""
    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    count = n
    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru != rv:
            parent[ru] = rv
            count -= 1
    return count
