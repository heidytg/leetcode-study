package solution

// Cheapest Flights Within K Stops — https://leetcode.com/problems/cheapest-flights-within-k-stops/
func findCheapestPrice(n int, flights [][]int, src, dst, k int) int {
	const inf = 1 << 30
	dist := make([]int, n)
	for i := range dist {
		dist[i] = inf
	}
	dist[src] = 0
	for i := 0; i <= k; i++ {
		tmp := make([]int, n)
		copy(tmp, dist) // snapshot: at most one new edge this round
		for _, f := range flights {
			u, v, w := f[0], f[1], f[2]
			if dist[u] != inf && dist[u]+w < tmp[v] {
				tmp[v] = dist[u] + w
			}
		}
		dist = tmp
	}
	if dist[dst] == inf {
		return -1
	}
	return dist[dst]
}
