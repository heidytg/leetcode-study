package solution

// Letter Combinations of a Phone Number — https://leetcode.com/problems/letter-combinations-of-a-phone-number/
func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}
	mapping := map[byte]string{
		'2': "abc", '3': "def", '4': "ghi", '5': "jkl",
		'6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz",
	}
	res := []string{}
	var backtrack func(i int, curr string)
	backtrack = func(i int, curr string) {
		if i == len(digits) {
			res = append(res, curr)
			return
		}
		for _, ch := range mapping[digits[i]] {
			backtrack(i+1, curr+string(ch))
		}
	}
	backtrack(0, "")
	return res
}
