package solution

import "container/heap"

type swimState struct{ t, r, c int }

type swimHeap []swimState

func (h swimHeap) Len() int           { return len(h) }
func (h swimHeap) Less(i, j int) bool { return h[i].t < h[j].t }
func (h swimHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *swimHeap) Push(x any)        { *h = append(*h, x.(swimState)) }
func (h *swimHeap) Pop() any {
	o := *h
	n := len(o)
	x := o[n-1]
	*h = o[:n-1]
	return x
}

// Swim in Rising Water — https://leetcode.com/problems/swim-in-rising-water/
func swimInWater(grid [][]int) int {
	n := len(grid)
	visited := make([][]bool, n)
	for i := range visited {
		visited[i] = make([]bool, n)
	}
	h := &swimHeap{{grid[0][0], 0, 0}}
	dirs := [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
	for h.Len() > 0 {
		s := heap.Pop(h).(swimState)
		if visited[s.r][s.c] {
			continue
		}
		visited[s.r][s.c] = true
		if s.r == n-1 && s.c == n-1 {
			return s.t
		}
		for _, d := range dirs {
			nr, nc := s.r+d[0], s.c+d[1]
			if nr >= 0 && nc >= 0 && nr < n && nc < n && !visited[nr][nc] {
				mx := s.t
				if grid[nr][nc] > mx {
					mx = grid[nr][nc]
				}
				heap.Push(h, swimState{mx, nr, nc})
			}
		}
	}
	return -1
}
