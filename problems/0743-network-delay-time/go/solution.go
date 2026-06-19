package solution

import "container/heap"

type state struct{ dist, node int }

type stateHeap []state

func (h stateHeap) Len() int           { return len(h) }
func (h stateHeap) Less(i, j int) bool { return h[i].dist < h[j].dist }
func (h stateHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *stateHeap) Push(x any)        { *h = append(*h, x.(state)) }
func (h *stateHeap) Pop() any {
	o := *h
	n := len(o)
	x := o[n-1]
	*h = o[:n-1]
	return x
}

// Network Delay Time — https://leetcode.com/problems/network-delay-time/
func networkDelayTime(times [][]int, n, k int) int {
	graph := map[int][][2]int{}
	for _, t := range times {
		graph[t[0]] = append(graph[t[0]], [2]int{t[1], t[2]})
	}

	dist := map[int]int{}
	h := &stateHeap{{0, k}}
	for h.Len() > 0 {
		s := heap.Pop(h).(state)
		if _, ok := dist[s.node]; ok {
			continue
		}
		dist[s.node] = s.dist
		for _, e := range graph[s.node] {
			if _, ok := dist[e[0]]; !ok {
				heap.Push(h, state{s.dist + e[1], e[0]})
			}
		}
	}

	if len(dist) < n {
		return -1
	}
	maxDist := 0
	for _, d := range dist {
		if d > maxDist {
			maxDist = d
		}
	}
	return maxDist
}
