def findMin(nums):
    """Find Minimum in Rotated Sorted Array — https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"""
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] > nums[hi]:
            lo = mid + 1
        else:
            hi = mid
    return nums[lo]
