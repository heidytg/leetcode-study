package solution

// Sliding Window Maximum — https://leetcode.com/problems/sliding-window-maximum/
func maxSlidingWindow(nums []int, k int) []int {
	dq := []int{} // indices, values decreasing front -> back
	res := []int{}
	for i, n := range nums {
		for len(dq) > 0 && nums[dq[len(dq)-1]] < n {
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, i)
		if dq[0] <= i-k {
			dq = dq[1:]
		}
		if i >= k-1 {
			res = append(res, nums[dq[0]])
		}
	}
	return res
}
