package solution

// Permutations — https://leetcode.com/problems/permutations/
func permute(nums []int) [][]int {
	res := [][]int{}
	var backtrack func(curr, remaining []int)
	backtrack = func(curr, remaining []int) {
		if len(remaining) == 0 {
			res = append(res, append([]int{}, curr...))
			return
		}
		for i := range remaining {
			nextCurr := append(append([]int{}, curr...), remaining[i])
			next := append(append([]int{}, remaining[:i]...), remaining[i+1:]...)
			backtrack(nextCurr, next)
		}
	}
	backtrack([]int{}, nums)
	return res
}
