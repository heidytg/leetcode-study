def kClosest(points, k):
    """K Closest Points to Origin — https://leetcode.com/problems/k-closest-points-to-origin/"""
    points.sort(key=lambda p: p[0] * p[0] + p[1] * p[1])
    return points[:k]
