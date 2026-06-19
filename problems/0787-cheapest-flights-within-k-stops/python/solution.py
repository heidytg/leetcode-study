def findCheapestPrice(n, flights, src, dst, k):
    """Cheapest Flights Within K Stops — https://leetcode.com/problems/cheapest-flights-within-k-stops/"""
    INF = float("inf")
    dist = [INF] * n
    dist[src] = 0
    for _ in range(k + 1):
        tmp = dist[:]  # snapshot: at most one new edge this round
        for u, v, w in flights:
            if dist[u] != INF and dist[u] + w < tmp[v]:
                tmp[v] = dist[u] + w
        dist = tmp
    return dist[dst] if dist[dst] != INF else -1
