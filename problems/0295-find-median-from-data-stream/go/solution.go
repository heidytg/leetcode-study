package solution

import "container/heap"

type minH []int

func (h minH) Len() int           { return len(h) }
func (h minH) Less(i, j int) bool { return h[i] < h[j] }
func (h minH) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *minH) Push(x any)        { *h = append(*h, x.(int)) }
func (h *minH) Pop() any {
	o := *h
	n := len(o)
	x := o[n-1]
	*h = o[:n-1]
	return x
}

type maxH []int

func (h maxH) Len() int           { return len(h) }
func (h maxH) Less(i, j int) bool { return h[i] > h[j] }
func (h maxH) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *maxH) Push(x any)        { *h = append(*h, x.(int)) }
func (h *maxH) Pop() any {
	o := *h
	n := len(o)
	x := o[n-1]
	*h = o[:n-1]
	return x
}

// Find Median from Data Stream — https://leetcode.com/problems/find-median-from-data-stream/
type MedianFinder struct {
	small *maxH // lower half (max-heap)
	large *minH // upper half (min-heap)
}

func NewMedianFinder() *MedianFinder {
	return &MedianFinder{small: &maxH{}, large: &minH{}}
}

func (m *MedianFinder) AddNum(num int) {
	heap.Push(m.small, num)
	// move the largest of small into large to enforce ordering
	heap.Push(m.large, heap.Pop(m.small))
	// keep small at least as large as large
	if m.large.Len() > m.small.Len() {
		heap.Push(m.small, heap.Pop(m.large))
	}
}

func (m *MedianFinder) FindMedian() float64 {
	if m.small.Len() > m.large.Len() {
		return float64((*m.small)[0])
	}
	return float64((*m.small)[0]+(*m.large)[0]) / 2
}

func medianFinderOps(ops []string, args [][]int) []float64 {
	mf := NewMedianFinder()
	out := []float64{}
	for i, op := range ops {
		switch op {
		case "MedianFinder":
			mf = NewMedianFinder()
		case "addNum":
			mf.AddNum(args[i][0])
		case "findMedian":
			out = append(out, mf.FindMedian())
		}
	}
	return out
}
