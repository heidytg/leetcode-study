package solution

// Subsets — https://leetcode.com/problems/subsets/
func subsets(nums []int) [][]int {
	res := [][]int{}
	subset := []int{}
	var backtrack func(i int)
	backtrack = func(i int) {
		if i == len(nums) {
			res = append(res, append([]int{}, subset...))
			return
		}
		subset = append(subset, nums[i]) // include
		backtrack(i + 1)
		subset = subset[:len(subset)-1] // exclude
		backtrack(i + 1)
	}
	backtrack(0)
	return res
}
