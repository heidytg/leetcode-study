class MinStack:
    """Min Stack — https://leetcode.com/problems/min-stack/"""

    def __init__(self):
        self.stack = []
        self.mins = []

    def push(self, val):
        self.stack.append(val)
        self.mins.append(val if not self.mins else min(val, self.mins[-1]))

    def pop(self):
        self.stack.pop()
        self.mins.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.mins[-1]


def minStackOps(ops, args):
    """Test driver: replay LeetCode-style operation/argument lists."""
    stack = MinStack()
    out = []
    for op, arg in zip(ops, args):
        if op == "MinStack":
            out.append(None)
        elif op == "push":
            stack.push(arg[0])
            out.append(None)
        elif op == "pop":
            stack.pop()
            out.append(None)
        elif op == "top":
            out.append(stack.top())
        elif op == "getMin":
            out.append(stack.getMin())
    return out
