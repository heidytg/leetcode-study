def isAnagram(s, t):
    """Valid Anagram — https://leetcode.com/problems/valid-anagram/"""
    if len(s) != len(t):
        return False
    counts = {}
    for c in s:
        counts[c] = counts.get(c, 0) + 1
    for c in t:
        if counts.get(c, 0) == 0:
            return False
        counts[c] -= 1
    return True
