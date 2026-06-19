package solution

// Permutation in String — https://leetcode.com/problems/permutation-in-string/
func checkInclusion(s1, s2 string) bool {
	if len(s1) > len(s2) {
		return false
	}
	var need, window [26]int
	for i := 0; i < len(s1); i++ {
		need[s1[i]-'a']++
	}
	for i := 0; i < len(s2); i++ {
		window[s2[i]-'a']++
		if i >= len(s1) {
			window[s2[i-len(s1)]-'a']--
		}
		if window == need {
			return true
		}
	}
	return false
}
