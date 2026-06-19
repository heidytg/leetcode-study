package solution

import "sort"

// K Closest Points to Origin — https://leetcode.com/problems/k-closest-points-to-origin/
func kClosest(points [][]int, k int) [][]int {
	sort.Slice(points, func(i, j int) bool {
		di := points[i][0]*points[i][0] + points[i][1]*points[i][1]
		dj := points[j][0]*points[j][0] + points[j][1]*points[j][1]
		return di < dj
	})
	return points[:k]
}
