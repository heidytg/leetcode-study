def findKthLargest(nums, k):
    """Kth Largest Element in an Array — https://leetcode.com/problems/kth-largest-element-in-an-array/"""
    return sorted(nums, reverse=True)[k - 1]
