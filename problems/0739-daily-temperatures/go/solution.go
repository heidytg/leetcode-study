package solution

// Daily Temperatures — https://leetcode.com/problems/daily-temperatures/
func dailyTemperatures(temperatures []int) []int {
	res := make([]int, len(temperatures))
	stack := []int{} // indices, temperatures decreasing
	for i, temp := range temperatures {
		for len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {
			j := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			res[j] = i - j
		}
		stack = append(stack, i)
	}
	return res
}
