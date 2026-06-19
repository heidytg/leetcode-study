import heapq


def minCostConnectPoints(points):
    """Min Cost to Connect All Points — https://leetcode.com/problems/min-cost-to-connect-all-points/"""
    n = len(points)
    visited = [False] * n
    heap = [(0, 0)]  # (cost, point index)
    total = 0
    count = 0
    while count < n and heap:
        cost, i = heapq.heappop(heap)
        if visited[i]:
            continue
        visited[i] = True
        total += cost
        count += 1
        for j in range(n):
            if not visited[j]:
                d = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
                heapq.heappush(heap, (d, j))
    return total
