def subsetsWithDup(nums):
    """Subsets II — https://leetcode.com/problems/subsets-ii/"""
    nums.sort()
    res = []
    subset = []

    def backtrack(start):
        res.append(subset[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:
                continue  # skip duplicate at this level
            subset.append(nums[i])
            backtrack(i + 1)
            subset.pop()

    backtrack(0)
    return res
