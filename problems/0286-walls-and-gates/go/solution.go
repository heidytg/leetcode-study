package solution

// Walls and Gates — https://leetcode.com/problems/walls-and-gates/
func wallsAndGates(rooms [][]int) [][]int {
	const inf = 2147483647
	if len(rooms) == 0 {
		return rooms
	}
	rows, cols := len(rooms), len(rooms[0])
	type cell struct{ r, c int }
	queue := []cell{}
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if rooms[r][c] == 0 {
				queue = append(queue, cell{r, c})
			}
		}
	}

	dirs := [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		for _, d := range dirs {
			nr, nc := cur.r+d[0], cur.c+d[1]
			if nr >= 0 && nc >= 0 && nr < rows && nc < cols && rooms[nr][nc] == inf {
				rooms[nr][nc] = rooms[cur.r][cur.c] + 1
				queue = append(queue, cell{nr, nc})
			}
		}
	}
	return rooms
}
