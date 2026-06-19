import heapq


def swimInWater(grid):
    """Swim in Rising Water — https://leetcode.com/problems/swim-in-rising-water/"""
    n = len(grid)
    visited = set()
    heap = [(grid[0][0], 0, 0)]  # (max elevation so far, r, c)
    while heap:
        t, r, c = heapq.heappop(heap)
        if (r, c) in visited:
            continue
        visited.add((r, c))
        if r == n - 1 and c == n - 1:
            return t
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:
                heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))
    return -1
