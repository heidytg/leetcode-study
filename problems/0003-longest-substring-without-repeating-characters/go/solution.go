package solution

// Longest Substring Without Repeating Characters — https://leetcode.com/problems/longest-substring-without-repeating-characters/
func lengthOfLongestSubstring(s string) int {
	last := make(map[byte]int)
	start, best := 0, 0
	for i := 0; i < len(s); i++ {
		c := s[i]
		if j, ok := last[c]; ok && j >= start {
			start = j + 1
		}
		last[c] = i
		if i-start+1 > best {
			best = i - start + 1
		}
	}
	return best
}
