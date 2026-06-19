package solution

// Number of Islands — https://leetcode.com/problems/number-of-islands/
func numIslands(grid [][]string) int {
	if len(grid) == 0 {
		return 0
	}
	rows, cols := len(grid), len(grid[0])
	var dfs func(r, c int)
	dfs = func(r, c int) {
		if r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] != "1" {
			return
		}
		grid[r][c] = "0"
		dfs(r+1, c)
		dfs(r-1, c)
		dfs(r, c+1)
		dfs(r, c-1)
	}
	count := 0
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if grid[r][c] == "1" {
				count++
				dfs(r, c)
			}
		}
	}
	return count
}
