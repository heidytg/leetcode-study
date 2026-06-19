package solution

// Longest Consecutive Sequence — https://leetcode.com/problems/longest-consecutive-sequence/
func longestConsecutive(nums []int) int {
	set := make(map[int]struct{}, len(nums))
	for _, n := range nums {
		set[n] = struct{}{}
	}
	longest := 0
	for n := range set {
		if _, ok := set[n-1]; ok {
			continue
		}
		length := 1
		for {
			if _, ok := set[n+length]; !ok {
				break
			}
			length++
		}
		if length > longest {
			longest = length
		}
	}
	return longest
}
