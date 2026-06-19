package solution

// Trapping Rain Water — https://leetcode.com/problems/trapping-rain-water/
func trap(height []int) int {
	if len(height) == 0 {
		return 0
	}
	left, right := 0, len(height)-1
	leftMax, rightMax := height[left], height[right]
	water := 0
	for left < right {
		if leftMax < rightMax {
			left++
			if height[left] > leftMax {
				leftMax = height[left]
			}
			water += leftMax - height[left]
		} else {
			right--
			if height[right] > rightMax {
				rightMax = height[right]
			}
			water += rightMax - height[right]
		}
	}
	return water
}
