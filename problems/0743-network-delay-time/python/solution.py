import heapq
from collections import defaultdict


def networkDelayTime(times, n, k):
    """Network Delay Time — https://leetcode.com/problems/network-delay-time/"""
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))

    dist = {}
    heap = [(0, k)]
    while heap:
        d, node = heapq.heappop(heap)
        if node in dist:
            continue
        dist[node] = d
        for nei, w in graph[node]:
            if nei not in dist:
                heapq.heappush(heap, (d + w, nei))

    if len(dist) < n:
        return -1
    return max(dist.values())
