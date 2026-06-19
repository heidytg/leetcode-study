package solution

import "sort"

// 3Sum — https://leetcode.com/problems/3sum/
func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	res := [][]int{}
	n := len(nums)
	for i := 0; i < n; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		left, right := i+1, n-1
		for left < right {
			total := nums[i] + nums[left] + nums[right]
			switch {
			case total < 0:
				left++
			case total > 0:
				right--
			default:
				res = append(res, []int{nums[i], nums[left], nums[right]})
				left++
				right--
				for left < right && nums[left] == nums[left-1] {
					left++
				}
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			}
		}
	}
	return res
}
