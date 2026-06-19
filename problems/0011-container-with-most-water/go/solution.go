package solution

// Container With Most Water — https://leetcode.com/problems/container-with-most-water/
func maxArea(height []int) int {
	left, right := 0, len(height)-1
	best := 0
	for left < right {
		h := height[left]
		if height[right] < h {
			h = height[right]
		}
		if area := (right - left) * h; area > best {
			best = area
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return best
}
