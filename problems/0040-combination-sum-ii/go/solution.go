package solution

import "sort"

// Combination Sum II — https://leetcode.com/problems/combination-sum-ii/
func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	res := [][]int{}
	combo := []int{}
	var backtrack func(start, remain int)
	backtrack = func(start, remain int) {
		if remain == 0 {
			res = append(res, append([]int{}, combo...))
			return
		}
		for i := start; i < len(candidates); i++ {
			if i > start && candidates[i] == candidates[i-1] {
				continue // skip duplicate at this level
			}
			if candidates[i] > remain {
				break // sorted: no later candidate fits
			}
			combo = append(combo, candidates[i])
			backtrack(i+1, remain-candidates[i]) // each used once -> i+1
			combo = combo[:len(combo)-1]
		}
	}
	backtrack(0, target)
	return res
}
