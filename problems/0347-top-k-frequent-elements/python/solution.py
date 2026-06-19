def topKFrequent(nums, k):
    """Top K Frequent Elements — https://leetcode.com/problems/top-k-frequent-elements/"""
    counts = {}
    for n in nums:
        counts[n] = counts.get(n, 0) + 1
    buckets = [[] for _ in range(len(nums) + 1)]
    for n, c in counts.items():
        buckets[c].append(n)
    res = []
    for c in range(len(buckets) - 1, 0, -1):
        for n in buckets[c]:
            res.append(n)
            if len(res) == k:
                return res
    return res
