package solution

import "sort"

// Subsets II — https://leetcode.com/problems/subsets-ii/
func subsetsWithDup(nums []int) [][]int {
	sort.Ints(nums)
	res := [][]int{}
	subset := []int{}
	var backtrack func(start int)
	backtrack = func(start int) {
		res = append(res, append([]int{}, subset...))
		for i := start; i < len(nums); i++ {
			if i > start && nums[i] == nums[i-1] {
				continue // skip duplicate at this level
			}
			subset = append(subset, nums[i])
			backtrack(i + 1)
			subset = subset[:len(subset)-1]
		}
	}
	backtrack(0)
	return res
}
