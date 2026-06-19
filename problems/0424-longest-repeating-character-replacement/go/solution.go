package solution

// Longest Repeating Character Replacement — https://leetcode.com/problems/longest-repeating-character-replacement/
func characterReplacement(s string, k int) int {
	var counts [26]int
	start, maxFreq, best := 0, 0, 0
	for end := 0; end < len(s); end++ {
		counts[s[end]-'A']++
		if counts[s[end]-'A'] > maxFreq {
			maxFreq = counts[s[end]-'A']
		}
		for (end-start+1)-maxFreq > k {
			counts[s[start]-'A']--
			start++
		}
		if end-start+1 > best {
			best = end - start + 1
		}
	}
	return best
}
