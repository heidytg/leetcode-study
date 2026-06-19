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


def addTwoNumbers(l1, l2):
    """Add Two Numbers — https://leetcode.com/problems/add-two-numbers/"""
    dummy = ListNode()
    cur = dummy
    carry = 0
    while l1 or l2 or carry:
        total = carry
        if l1:
            total += l1.val
            l1 = l1.next
        if l2:
            total += l2.val
            l2 = l2.next
        carry, digit = divmod(total, 10)
        cur.next = ListNode(digit)
        cur = cur.next
    return dummy.next


def addTwoNumbersArr(a, b):
    return to_list(addTwoNumbers(build(a), build(b)))
