package solution

import "math"

// Best Time to Buy and Sell Stock — https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
func maxProfit(prices []int) int {
	minPrice := math.MaxInt
	best := 0
	for _, p := range prices {
		if p < minPrice {
			minPrice = p
		} else if p-minPrice > best {
			best = p - minPrice
		}
	}
	return best
}
