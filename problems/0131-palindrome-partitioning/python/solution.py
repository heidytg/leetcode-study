def partition(s):
    """Palindrome Partitioning — https://leetcode.com/problems/palindrome-partitioning/"""
    res = []
    part = []

    def is_pal(left, right):
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True

    def backtrack(start):
        if start == len(s):
            res.append(part[:])
            return
        for end in range(start, len(s)):
            if is_pal(start, end):
                part.append(s[start:end + 1])
                backtrack(end + 1)
                part.pop()

    backtrack(0)
    return res
