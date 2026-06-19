def permute(nums):
    """Permutations — https://leetcode.com/problems/permutations/"""
    res = []

    def backtrack(curr, remaining):
        if not remaining:
            res.append(curr[:])
            return
        for i in range(len(remaining)):
            backtrack(curr + [remaining[i]], remaining[:i] + remaining[i + 1:])

    backtrack([], nums)
    return res
