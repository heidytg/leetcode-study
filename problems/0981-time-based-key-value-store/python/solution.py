class TimeMap:
    """Time Based Key-Value Store — https://leetcode.com/problems/time-based-key-value-store/"""

    def __init__(self):
        self.store = {}

    def set(self, key, value, timestamp):
        self.store.setdefault(key, []).append((timestamp, value))

    def get(self, key, timestamp):
        entries = self.store.get(key, [])
        lo, hi = 0, len(entries) - 1
        res = ""
        while lo <= hi:
            mid = (lo + hi) // 2
            if entries[mid][0] <= timestamp:
                res = entries[mid][1]
                lo = mid + 1
            else:
                hi = mid - 1
        return res


def timeMapOps(ops, args):
    """Test driver: replay LeetCode-style operation/argument lists."""
    tm = TimeMap()
    out = []
    for op, arg in zip(ops, args):
        if op == "TimeMap":
            out.append(None)
        elif op == "set":
            tm.set(arg[0], arg[1], arg[2])
            out.append(None)
        elif op == "get":
            out.append(tm.get(arg[0], arg[1]))
    return out
