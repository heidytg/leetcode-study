def subsets(nums):
    """Subsets — https://leetcode.com/problems/subsets/"""
    res = []
    subset = []

    def backtrack(i):
        if i == len(nums):
            res.append(subset[:])
            return
        subset.append(nums[i])  # include nums[i]
        backtrack(i + 1)
        subset.pop()            # exclude nums[i]
        backtrack(i + 1)

    backtrack(0)
    return res
