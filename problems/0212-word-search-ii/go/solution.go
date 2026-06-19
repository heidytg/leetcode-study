package solution

// Word Search II — https://leetcode.com/problems/word-search-ii/
func findWords(board [][]string, words []string) []string {
	type node struct {
		children map[string]*node
		word     string
	}
	root := &node{children: map[string]*node{}}
	for _, w := range words {
		cur := root
		for _, ch := range w {
			k := string(ch)
			if cur.children[k] == nil {
				cur.children[k] = &node{children: map[string]*node{}}
			}
			cur = cur.children[k]
		}
		cur.word = w
	}

	rows, cols := len(board), len(board[0])
	foundSet := map[string]bool{}
	var dfs func(r, c int, n *node)
	dfs = func(r, c int, n *node) {
		if r < 0 || c < 0 || r >= rows || c >= cols {
			return
		}
		ch := board[r][c]
		nxt := n.children[ch]
		if nxt == nil {
			return
		}
		if nxt.word != "" {
			foundSet[nxt.word] = true
		}
		board[r][c] = "#"
		dfs(r+1, c, nxt)
		dfs(r-1, c, nxt)
		dfs(r, c+1, nxt)
		dfs(r, c-1, nxt)
		board[r][c] = ch
	}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			dfs(r, c, root)
		}
	}

	res := []string{}
	for w := range foundSet {
		res = append(res, w)
	}
	return res
}
