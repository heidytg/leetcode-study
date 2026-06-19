package solution

import "container/heap"

type edge struct{ cost, node int }

type edgeHeap []edge

func (h edgeHeap) Len() int           { return len(h) }
func (h edgeHeap) Less(i, j int) bool { return h[i].cost < h[j].cost }
func (h edgeHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *edgeHeap) Push(x any)        { *h = append(*h, x.(edge)) }
func (h *edgeHeap) Pop() any {
	o := *h
	n := len(o)
	x := o[n-1]
	*h = o[:n-1]
	return x
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

// Min Cost to Connect All Points — https://leetcode.com/problems/min-cost-to-connect-all-points/
func minCostConnectPoints(points [][]int) int {
	n := len(points)
	visited := make([]bool, n)
	h := &edgeHeap{{0, 0}}
	total, count := 0, 0
	for count < n && h.Len() > 0 {
		e := heap.Pop(h).(edge)
		if visited[e.node] {
			continue
		}
		visited[e.node] = true
		total += e.cost
		count++
		for j := 0; j < n; j++ {
			if !visited[j] {
				d := abs(points[e.node][0]-points[j][0]) + abs(points[e.node][1]-points[j][1])
				heap.Push(h, edge{d, j})
			}
		}
	}
	return total
}
