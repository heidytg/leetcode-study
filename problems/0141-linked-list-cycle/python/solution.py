class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def build_cycle(vals, pos):
    dummy = ListNode()
    cur = dummy
    nodes = []
    for v in vals:
        cur.next = ListNode(v)
        cur = cur.next
        nodes.append(cur)
    if 0 <= pos < len(nodes):
        cur.next = nodes[pos]
    return dummy.next


def hasCycle(head):
    """Linked List Cycle — https://leetcode.com/problems/linked-list-cycle/"""
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False


def hasCycleArr(vals, pos):
    return hasCycle(build_cycle(vals, pos))
