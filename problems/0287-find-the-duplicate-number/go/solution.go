package solution

// Find the Duplicate Number — https://leetcode.com/problems/find-the-duplicate-number/
func findDuplicate(nums []int) int {
	slow, fast := 0, 0
	for {
		slow = nums[slow]
		fast = nums[nums[fast]]
		if slow == fast {
			break
		}
	}
	slow2 := 0
	for slow != slow2 {
		slow = nums[slow]
		slow2 = nums[slow2]
	}
	return slow
}
