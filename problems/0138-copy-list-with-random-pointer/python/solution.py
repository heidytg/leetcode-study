class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random


def copyRandomList(head):
    """Copy List with Random Pointer — https://leetcode.com/problems/copy-list-with-random-pointer/"""
    if not head:
        return None
    clones = {}
    cur = head
    while cur:
        clones[cur] = Node(cur.val)
        cur = cur.next
    cur = head
    while cur:
        clones[cur].next = clones[cur.next] if cur.next else None
        clones[cur].random = clones[cur.random] if cur.random else None
        cur = cur.next
    return clones[head]


def copyRandomListArr(data):
    if not data:
        return []
    nodes = [Node(item[0]) for item in data]
    for i, item in enumerate(data):
        if i + 1 < len(data):
            nodes[i].next = nodes[i + 1]
        if item[1] is not None:
            nodes[i].random = nodes[item[1]]
    copied = copyRandomList(nodes[0])
    index = {}
    cur = copied
    i = 0
    while cur:
        index[id(cur)] = i
        cur = cur.next
        i += 1
    out = []
    cur = copied
    while cur:
        rnd = index[id(cur.random)] if cur.random else None
        out.append([cur.val, rnd])
        cur = cur.next
    return out
