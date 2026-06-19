package solution

// Palindrome Partitioning — https://leetcode.com/problems/palindrome-partitioning/
func partition(s string) [][]string {
	res := [][]string{}
	part := []string{}
	isPal := func(l, r int) bool {
		for l < r {
			if s[l] != s[r] {
				return false
			}
			l++
			r--
		}
		return true
	}
	var backtrack func(start int)
	backtrack = func(start int) {
		if start == len(s) {
			res = append(res, append([]string{}, part...))
			return
		}
		for end := start; end < len(s); end++ {
			if isPal(start, end) {
				part = append(part, s[start:end+1])
				backtrack(end + 1)
				part = part[:len(part)-1]
			}
		}
	}
	backtrack(0)
	return res
}
