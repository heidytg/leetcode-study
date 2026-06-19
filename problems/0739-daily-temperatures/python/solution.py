def dailyTemperatures(temperatures):
    """Daily Temperatures — https://leetcode.com/problems/daily-temperatures/"""
    res = [0] * len(temperatures)
    stack = []  # indices, temperatures decreasing
    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            j = stack.pop()
            res[j] = i - j
        stack.append(i)
    return res
