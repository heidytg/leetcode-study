def checkInclusion(s1, s2):
    """Permutation in String — https://leetcode.com/problems/permutation-in-string/"""
    if len(s1) > len(s2):
        return False
    need = [0] * 26
    window = [0] * 26
    for c in s1:
        need[ord(c) - 97] += 1
    for i, c in enumerate(s2):
        window[ord(c) - 97] += 1
        if i >= len(s1):
            window[ord(s2[i - len(s1)]) - 97] -= 1
        if window == need:
            return True
    return False
