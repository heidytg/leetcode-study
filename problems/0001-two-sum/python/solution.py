def twoSum(nums, target):
    """Two Sum — https://leetcode.com/problems/two-sum/"""
    seen = {}
    for i, n in enumerate(nums):
        j = seen.get(target - n)
        if j is not None:
            return [j, i]
        seen[n] = i
    return []
