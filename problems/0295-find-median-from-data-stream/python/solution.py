import heapq


class MedianFinder:
    """Find Median from Data Stream — https://leetcode.com/problems/find-median-from-data-stream/"""

    def __init__(self):
        self.small = []  # max-heap (stored negated): lower half
        self.large = []  # min-heap: upper half

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        # enforce max(small) <= min(large)
        if self.small and self.large and -self.small[0] > self.large[0]:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        # balance sizes (differ by at most 1)
        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small) + 1:
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        if len(self.large) > len(self.small):
            return float(self.large[0])
        return (-self.small[0] + self.large[0]) / 2


def medianFinderOps(ops, args):
    """Test driver: returns the findMedian results in order."""
    mf = MedianFinder()
    out = []
    for op, arg in zip(ops, args):
        if op == "MedianFinder":
            mf = MedianFinder()
        elif op == "addNum":
            mf.addNum(arg[0])
        elif op == "findMedian":
            out.append(mf.findMedian())
    return out
