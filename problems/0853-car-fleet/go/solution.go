package solution

import "sort"

// Car Fleet — https://leetcode.com/problems/car-fleet/
func carFleet(target int, position []int, speed []int) int {
	idx := make([]int, len(position))
	for i := range idx {
		idx[i] = i
	}
	// sort by starting position, descending (closest to target first)
	sort.Slice(idx, func(a, b int) bool {
		return position[idx[a]] > position[idx[b]]
	})

	fleets := 0
	curTime := 0.0
	for _, i := range idx {
		time := float64(target-position[i]) / float64(speed[i])
		if time > curTime {
			fleets++
			curTime = time
		}
	}
	return fleets
}
