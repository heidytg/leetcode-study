package solution

// Largest Rectangle in Histogram — https://leetcode.com/problems/largest-rectangle-in-histogram/
func largestRectangleArea(heights []int) int {
	type bar struct{ start, height int }
	stack := []bar{} // heights increasing
	best := 0
	for i, h := range heights {
		start := i
		for len(stack) > 0 && stack[len(stack)-1].height > h {
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if area := top.height * (i - top.start); area > best {
				best = area
			}
			start = top.start
		}
		stack = append(stack, bar{start, h})
	}
	n := len(heights)
	for _, b := range stack {
		if area := b.height * (n - b.start); area > best {
			best = area
		}
	}
	return best
}
