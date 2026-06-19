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


def mergeTwo(l1, l2):
    dummy = ListNode()
    tail = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 if l1 else l2
    return dummy.next


def mergeKLists(lists):
    """Merge k Sorted Lists — https://leetcode.com/problems/merge-k-sorted-lists/"""
    if not lists:
        return None
    while len(lists) > 1:
        merged = []
        for i in range(0, len(lists), 2):
            l2 = lists[i + 1] if i + 1 < len(lists) else None
            merged.append(mergeTwo(lists[i], l2))
        lists = merged
    return lists[0]


def mergeKListsArr(arrays):
    return to_list(mergeKLists([build(a) for a in arrays]))
