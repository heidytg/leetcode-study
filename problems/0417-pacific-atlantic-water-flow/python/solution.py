def pacificAtlantic(heights):
    """Pacific Atlantic Water Flow — https://leetcode.com/problems/pacific-atlantic-water-flow/"""
    if not heights:
        return []
    rows, cols = len(heights), len(heights[0])
    pacific = set()
    atlantic = set()

    def dfs(r, c, visited, prev):
        if (
            r < 0 or c < 0 or r >= rows or c >= cols
            or (r, c) in visited or heights[r][c] < prev
        ):
            return
        visited.add((r, c))
        h = heights[r][c]
        dfs(r + 1, c, visited, h)
        dfs(r - 1, c, visited, h)
        dfs(r, c + 1, visited, h)
        dfs(r, c - 1, visited, h)

    for c in range(cols):
        dfs(0, c, pacific, heights[0][c])
        dfs(rows - 1, c, atlantic, heights[rows - 1][c])
    for r in range(rows):
        dfs(r, 0, pacific, heights[r][0])
        dfs(r, cols - 1, atlantic, heights[r][cols - 1])

    return [[r, c] for r in range(rows) for c in range(cols)
            if (r, c) in pacific and (r, c) in atlantic]
