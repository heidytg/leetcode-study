def characterReplacement(s, k):
    """Longest Repeating Character Replacement — https://leetcode.com/problems/longest-repeating-character-replacement/"""
    counts = {}
    start = 0
    max_freq = 0
    best = 0
    for end, c in enumerate(s):
        counts[c] = counts.get(c, 0) + 1
        max_freq = max(max_freq, counts[c])
        while (end - start + 1) - max_freq > k:
            counts[s[start]] -= 1
            start += 1
        best = max(best, end - start + 1)
    return best
