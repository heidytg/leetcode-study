package solution

import "container/heap"

type maxHeap []int

func (h maxHeap) Len() int           { return len(h) }
func (h maxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h maxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *maxHeap) Push(x any)        { *h = append(*h, x.(int)) }
func (h *maxHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

// Last Stone Weight — https://leetcode.com/problems/last-stone-weight/
func lastStoneWeight(stones []int) int {
	h := &maxHeap{}
	*h = append(*h, stones...)
	heap.Init(h)
	for h.Len() > 1 {
		a := heap.Pop(h).(int)
		b := heap.Pop(h).(int)
		if a != b {
			heap.Push(h, a-b)
		}
	}
	if h.Len() == 0 {
		return 0
	}
	return (*h)[0]
}
