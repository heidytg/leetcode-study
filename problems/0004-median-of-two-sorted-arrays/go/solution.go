package solution

import "math"

// Median of Two Sorted Arrays — https://leetcode.com/problems/median-of-two-sorted-arrays/
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	A, B := nums1, nums2
	if len(A) > len(B) {
		A, B = B, A
	}
	m, n := len(A), len(B)
	half := (m + n + 1) / 2
	lo, hi := 0, m
	for lo <= hi {
		i := lo + (hi-lo)/2
		j := half - i
		aLeft := math.Inf(-1)
		if i > 0 {
			aLeft = float64(A[i-1])
		}
		aRight := math.Inf(1)
		if i < m {
			aRight = float64(A[i])
		}
		bLeft := math.Inf(-1)
		if j > 0 {
			bLeft = float64(B[j-1])
		}
		bRight := math.Inf(1)
		if j < n {
			bRight = float64(B[j])
		}
		if aLeft <= bRight && bLeft <= aRight {
			if (m+n)%2 == 1 {
				return math.Max(aLeft, bLeft)
			}
			return (math.Max(aLeft, bLeft) + math.Min(aRight, bRight)) / 2
		}
		if aLeft > bRight {
			hi = i - 1
		} else {
			lo = i + 1
		}
	}
	return 0
}
