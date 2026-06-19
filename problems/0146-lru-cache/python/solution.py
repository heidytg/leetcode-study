from collections import OrderedDict


class LRUCache:
    """LRU Cache — https://leetcode.com/problems/lru-cache/"""

    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)


def lruCacheOps(ops, args):
    """Test driver: replay LeetCode-style operation/argument lists."""
    cache = None
    out = []
    for op, arg in zip(ops, args):
        if op == "LRUCache":
            cache = LRUCache(arg[0])
            out.append(None)
        elif op == "put":
            cache.put(arg[0], arg[1])
            out.append(None)
        elif op == "get":
            out.append(cache.get(arg[0]))
    return out
