package solution

// Minimum Window Substring — https://leetcode.com/problems/minimum-window-substring/
func minWindow(s, t string) string {
	if len(s) == 0 || len(t) == 0 {
		return ""
	}
	need := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		need[t[i]]++
	}
	required := len(need)
	window := make(map[byte]int)
	have := 0
	bestLen := -1
	bestLeft := 0
	left := 0
	for right := 0; right < len(s); right++ {
		c := s[right]
		window[c]++
		if cnt, ok := need[c]; ok && window[c] == cnt {
			have++
		}
		for have == required {
			if bestLen == -1 || right-left+1 < bestLen {
				bestLen = right - left + 1
				bestLeft = left
			}
			lc := s[left]
			window[lc]--
			if cnt, ok := need[lc]; ok && window[lc] < cnt {
				have--
			}
			left++
		}
	}
	if bestLen == -1 {
		return ""
	}
	return s[bestLeft : bestLeft+bestLen]
}
