def minEatingSpeed(piles, h):
    """Koko Eating Bananas — https://leetcode.com/problems/koko-eating-bananas/"""
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        hours = sum((p + mid - 1) // mid for p in piles)
        if hours <= h:
            hi = mid
        else:
            lo = mid + 1
    return lo
