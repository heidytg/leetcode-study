package solution

// Search a 2D Matrix — https://leetcode.com/problems/search-a-2d-matrix/
func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}
	rows, cols := len(matrix), len(matrix[0])
	lo, hi := 0, rows*cols-1
	for lo <= hi {
		mid := lo + (hi-lo)/2
		val := matrix[mid/cols][mid%cols]
		if val == target {
			return true
		}
		if val < target {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return false
}
