from collections import deque


def maxSlidingWindow(nums, k):
    """Sliding Window Maximum — https://leetcode.com/problems/sliding-window-maximum/"""
    dq = deque()  # indices, values decreasing front -> back
    res = []
    for i, n in enumerate(nums):
        while dq and nums[dq[-1]] < n:
            dq.pop()
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:
            res.append(nums[dq[0]])
    return res
