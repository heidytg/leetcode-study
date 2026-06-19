package solution

// Rotting Oranges — https://leetcode.com/problems/rotting-oranges/
func orangesRotting(grid [][]int) int {
	rows, cols := len(grid), len(grid[0])
	type cell struct{ r, c int }
	queue := []cell{}
	fresh := 0
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if grid[r][c] == 2 {
				queue = append(queue, cell{r, c})
			} else if grid[r][c] == 1 {
				fresh++
			}
		}
	}

	minutes := 0
	dirs := [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
	for len(queue) > 0 && fresh > 0 {
		minutes++
		next := []cell{}
		for _, cur := range queue {
			for _, d := range dirs {
				nr, nc := cur.r+d[0], cur.c+d[1]
				if nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] == 1 {
					grid[nr][nc] = 2
					fresh--
					next = append(next, cell{nr, nc})
				}
			}
		}
		queue = next
	}

	if fresh == 0 {
		return minutes
	}
	return -1
}
