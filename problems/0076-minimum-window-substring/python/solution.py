def minWindow(s, t):
    """Minimum Window Substring — https://leetcode.com/problems/minimum-window-substring/"""
    if not s or not t:
        return ""
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    required = len(need)
    window = {}
    have = 0
    best_len = float("inf")
    best_left = 0
    left = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < best_len:
                best_len = right - left + 1
                best_left = left
            lc = s[left]
            window[lc] -= 1
            if lc in need and window[lc] < need[lc]:
                have -= 1
            left += 1
    return "" if best_len == float("inf") else s[best_left:best_left + best_len]
