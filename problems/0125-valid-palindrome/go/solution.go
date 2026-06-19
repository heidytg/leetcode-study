package solution

import "unicode"

// Valid Palindrome — https://leetcode.com/problems/valid-palindrome/
func isPalindrome(s string) bool {
	r := []rune(s)
	i, j := 0, len(r)-1
	for i < j {
		for i < j && !isAlnum(r[i]) {
			i++
		}
		for i < j && !isAlnum(r[j]) {
			j--
		}
		if unicode.ToLower(r[i]) != unicode.ToLower(r[j]) {
			return false
		}
		i++
		j--
	}
	return true
}

func isAlnum(r rune) bool {
	return unicode.IsLetter(r) || unicode.IsDigit(r)
}
