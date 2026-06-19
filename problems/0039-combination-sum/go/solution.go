package solution

// Combination Sum — https://leetcode.com/problems/combination-sum/
func combinationSum(candidates []int, target int) [][]int {
	res := [][]int{}
	combo := []int{}
	var backtrack func(start, remain int)
	backtrack = func(start, remain int) {
		if remain == 0 {
			res = append(res, append([]int{}, combo...))
			return
		}
		if remain < 0 {
			return
		}
		for i := start; i < len(candidates); i++ {
			combo = append(combo, candidates[i])
			backtrack(i, remain-candidates[i]) // reuse allowed -> i
			combo = combo[:len(combo)-1]
		}
	}
	backtrack(0, target)
	return res
}
