package solution

// Pacific Atlantic Water Flow — https://leetcode.com/problems/pacific-atlantic-water-flow/
func pacificAtlantic(heights [][]int) [][]int {
	if len(heights) == 0 {
		return [][]int{}
	}
	rows, cols := len(heights), len(heights[0])
	pacific := make([][]bool, rows)
	atlantic := make([][]bool, rows)
	for i := range pacific {
		pacific[i] = make([]bool, cols)
		atlantic[i] = make([]bool, cols)
	}

	var dfs func(r, c int, visited [][]bool, prev int)
	dfs = func(r, c int, visited [][]bool, prev int) {
		if r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c] || heights[r][c] < prev {
			return
		}
		visited[r][c] = true
		h := heights[r][c]
		dfs(r+1, c, visited, h)
		dfs(r-1, c, visited, h)
		dfs(r, c+1, visited, h)
		dfs(r, c-1, visited, h)
	}

	for c := 0; c < cols; c++ {
		dfs(0, c, pacific, heights[0][c])
		dfs(rows-1, c, atlantic, heights[rows-1][c])
	}
	for r := 0; r < rows; r++ {
		dfs(r, 0, pacific, heights[r][0])
		dfs(r, cols-1, atlantic, heights[r][cols-1])
	}

	res := [][]int{}
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if pacific[r][c] && atlantic[r][c] {
				res = append(res, []int{r, c})
			}
		}
	}
	return res
}
