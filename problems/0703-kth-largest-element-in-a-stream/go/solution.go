package solution

import "container/heap"

type intHeap []int

func (h intHeap) Len() int            { return len(h) }
func (h intHeap) Less(i, j int) bool  { return h[i] < h[j] }
func (h intHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *intHeap) Push(x any)         { *h = append(*h, x.(int)) }
func (h *intHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

// Kth Largest Element in a Stream — https://leetcode.com/problems/kth-largest-element-in-a-stream/
type KthLargest struct {
	k int
	h *intHeap
}

func NewKthLargest(k int, nums []int) *KthLargest {
	h := &intHeap{}
	*h = append(*h, nums...)
	heap.Init(h)
	for h.Len() > k {
		heap.Pop(h)
	}
	return &KthLargest{k: k, h: h}
}

func (kl *KthLargest) Add(val int) int {
	heap.Push(kl.h, val)
	for kl.h.Len() > kl.k {
		heap.Pop(kl.h)
	}
	return (*kl.h)[0]
}

func kthLargestOps(ops []string, args [][]any) []*int {
	var obj *KthLargest
	out := []*int{}
	for i, op := range ops {
		switch op {
		case "KthLargest":
			k := int(args[i][0].(float64))
			rawNums := args[i][1].([]any)
			nums := make([]int, len(rawNums))
			for j, v := range rawNums {
				nums[j] = int(v.(float64))
			}
			obj = NewKthLargest(k, nums)
			out = append(out, nil)
		case "add":
			v := obj.Add(int(args[i][0].(float64)))
			out = append(out, &v)
		}
	}
	return out
}
