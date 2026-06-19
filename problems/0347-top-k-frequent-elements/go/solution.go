package solution

// Top K Frequent Elements — https://leetcode.com/problems/top-k-frequent-elements/
func topKFrequent(nums []int, k int) []int {
	counts := make(map[int]int)
	for _, n := range nums {
		counts[n]++
	}
	buckets := make([][]int, len(nums)+1)
	for n, c := range counts {
		buckets[c] = append(buckets[c], n)
	}
	res := make([]int, 0, k)
	for c := len(buckets) - 1; c > 0 && len(res) < k; c-- {
		for _, n := range buckets[c] {
			res = append(res, n)
			if len(res) == k {
				break
			}
		}
	}
	return res
}
