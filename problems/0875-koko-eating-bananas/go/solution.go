package solution

// Koko Eating Bananas — https://leetcode.com/problems/koko-eating-bananas/
func minEatingSpeed(piles []int, h int) int {
	hi := 0
	for _, p := range piles {
		if p > hi {
			hi = p
		}
	}
	lo := 1
	for lo < hi {
		mid := lo + (hi-lo)/2
		hours := 0
		for _, p := range piles {
			hours += (p + mid - 1) / mid
		}
		if hours <= h {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
