package solution

// Generate Parentheses — https://leetcode.com/problems/generate-parentheses/
func generateParenthesis(n int) []string {
	res := []string{}
	var backtrack func(cur string, open, closed int)
	backtrack = func(cur string, open, closed int) {
		if len(cur) == 2*n {
			res = append(res, cur)
			return
		}
		if open < n {
			backtrack(cur+"(", open+1, closed)
		}
		if closed < open {
			backtrack(cur+")", open, closed+1)
		}
	}
	backtrack("", 0, 0)
	return res
}
