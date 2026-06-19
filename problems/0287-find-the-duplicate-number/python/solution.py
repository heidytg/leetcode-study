def findDuplicate(nums):
    """Find the Duplicate Number — https://leetcode.com/problems/find-the-duplicate-number/"""
    slow = fast = 0
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow2 = 0
    while slow != slow2:
        slow = nums[slow]
        slow2 = nums[slow2]
    return slow
