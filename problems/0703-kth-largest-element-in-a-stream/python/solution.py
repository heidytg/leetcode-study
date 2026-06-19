import heapq


class KthLargest:
    """Kth Largest Element in a Stream — https://leetcode.com/problems/kth-largest-element-in-a-stream/"""

    def __init__(self, k, nums):
        self.k = k
        self.heap = list(nums)
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val):
        heapq.heappush(self.heap, val)
        while len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]


def kthLargestOps(ops, args):
    """Test driver: replay LeetCode-style operation/argument lists."""
    obj = None
    out = []
    for op, arg in zip(ops, args):
        if op == "KthLargest":
            obj = KthLargest(arg[0], arg[1])
            out.append(None)
        elif op == "add":
            out.append(obj.add(arg[0]))
    return out
