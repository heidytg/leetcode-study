def combinationSum(candidates, target):
    """Combination Sum — https://leetcode.com/problems/combination-sum/"""
    res = []
    combo = []

    def backtrack(start, remain):
        if remain == 0:
            res.append(combo[:])
            return
        if remain < 0:
            return
        for i in range(start, len(candidates)):
            combo.append(candidates[i])
            backtrack(i, remain - candidates[i])  # reuse allowed -> i, not i+1
            combo.pop()

    backtrack(0, target)
    return res
