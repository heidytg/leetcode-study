package solution

// Surrounded Regions — https://leetcode.com/problems/surrounded-regions/
func solve(board [][]string) [][]string {
	if len(board) == 0 {
		return board
	}
	rows, cols := len(board), len(board[0])
	var dfs func(r, c int)
	dfs = func(r, c int) {
		if r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != "O" {
			return
		}
		board[r][c] = "T" // mark border-connected
		dfs(r+1, c)
		dfs(r-1, c)
		dfs(r, c+1)
		dfs(r, c-1)
	}
	for r := 0; r < rows; r++ {
		dfs(r, 0)
		dfs(r, cols-1)
	}
	for c := 0; c < cols; c++ {
		dfs(0, c)
		dfs(rows-1, c)
	}
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if board[r][c] == "O" {
				board[r][c] = "X" // surrounded -> capture
			} else if board[r][c] == "T" {
				board[r][c] = "O" // border-connected -> restore
			}
		}
	}
	return board
}
