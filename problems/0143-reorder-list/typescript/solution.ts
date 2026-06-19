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

// Reorder List — https://leetcode.com/problems/reorder-list/
function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;
  // 1) find middle
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  // 2) reverse second half
  let second = slow.next;
  slow.next = null;
  let prev: ListNode | null = null;
  while (second !== null) {
    const nxt = second.next;
    second.next = prev;
    prev = second;
    second = nxt;
  }
  // 3) merge halves
  let first: ListNode | null = head;
  second = prev;
  while (second !== null) {
    const n1 = first!.next;
    const n2 = second.next;
    first!.next = second;
    second.next = n1;
    first = n1;
    second = n2;
  }
}

export function reorderListArr(vals: number[]): number[] {
  const head = build(vals);
  reorderList(head);
  return toArray(head);
}
