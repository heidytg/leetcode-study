package solution

import "sort"

// Kth Largest Element in an Array — https://leetcode.com/problems/kth-largest-element-in-an-array/
func findKthLargest(nums []int, k int) int {
	sorted := append([]int(nil), nums...)
	sort.Sort(sort.Reverse(sort.IntSlice(sorted)))
	return sorted[k-1]
}
