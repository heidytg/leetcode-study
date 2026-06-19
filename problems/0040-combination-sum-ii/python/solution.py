def combinationSum2(candidates, target):
    """Combination Sum II — https://leetcode.com/problems/combination-sum-ii/"""
    candidates.sort()
    res = []
    combo = []

    def backtrack(start, remain):
        if remain == 0:
            res.append(combo[:])
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue  # skip duplicate at this level
            if candidates[i] > remain:
                break  # sorted: no later candidate fits
            combo.append(candidates[i])
            backtrack(i + 1, remain - candidates[i])  # each used once -> i+1
            combo.pop()

    backtrack(0, target)
    return res
