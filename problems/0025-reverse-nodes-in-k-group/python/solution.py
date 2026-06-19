class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def build(vals):
    dummy = ListNode()
    cur = dummy
    for v in vals:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next


def to_list(head):
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out


def reverseKGroup(head, k):
    """Reverse Nodes in k-Group — https://leetcode.com/problems/reverse-nodes-in-k-group/"""
    node = head
    count = 0
    while node and count < k:
        node = node.next
        count += 1
    if count < k:
        return head
    prev = reverseKGroup(node, k)  # process the remainder first
    cur = head
    for _ in range(k):
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev


def reverseKGroupArr(vals, k):
    return to_list(reverseKGroup(build(vals), k))
