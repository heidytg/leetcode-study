package solution

// N-Queens — https://leetcode.com/problems/n-queens/
func solveNQueens(n int) [][]string {
	res := [][]string{}
	cols := map[int]bool{}
	anti := map[int]bool{} // r + c
	main := map[int]bool{} // r - c
	board := make([][]byte, n)
	for i := range board {
		board[i] = make([]byte, n)
		for j := range board[i] {
			board[i][j] = '.'
		}
	}
	var backtrack func(r int)
	backtrack = func(r int) {
		if r == n {
			sol := make([]string, n)
			for i := range board {
				sol[i] = string(board[i])
			}
			res = append(res, sol)
			return
		}
		for c := 0; c < n; c++ {
			if cols[c] || anti[r+c] || main[r-c] {
				continue
			}
			cols[c], anti[r+c], main[r-c] = true, true, true
			board[r][c] = 'Q'
			backtrack(r + 1)
			board[r][c] = '.'
			cols[c], anti[r+c], main[r-c] = false, false, false
		}
	}
	backtrack(0)
	return res
}
