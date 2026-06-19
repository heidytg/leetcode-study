def largestRectangleArea(heights):
    """Largest Rectangle in Histogram — https://leetcode.com/problems/largest-rectangle-in-histogram/"""
    stack = []  # (start_index, height), heights increasing
    best = 0
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            idx, height = stack.pop()
            best = max(best, height * (i - idx))
            start = idx
        stack.append((start, h))
    n = len(heights)
    for idx, height in stack:
        best = max(best, height * (n - idx))
    return best
