class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function build(vals: number[]): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  for (const v of vals) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const out: number[] = [];
  for (let n = head; n !== null; n = n.next) out.push(n.val);
  return out;
}

// Remove Nth Node From End of List — https://leetcode.com/problems/remove-nth-node-from-end-of-list/
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode = dummy;
  let slow: ListNode = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next as ListNode;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next as ListNode;
  }
  slow.next = slow.next !== null ? slow.next.next : null;
  return dummy.next;
}

export function removeNthFromEndArr(vals: number[], n: number): number[] {
  return toArray(removeNthFromEnd(build(vals), n));
}
