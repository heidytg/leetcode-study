class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function buildCycle(vals: number[], pos: number): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  const nodes: ListNode[] = [];
  for (const v of vals) {
    cur.next = new ListNode(v);
    cur = cur.next;
    nodes.push(cur);
  }
  if (pos >= 0 && pos < nodes.length) cur.next = nodes[pos];
  return dummy.next;
}

// Linked List Cycle — https://leetcode.com/problems/linked-list-cycle/
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast?.next != null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
    if (slow !== null && slow === fast) return true;
  }
  return false;
}

export function hasCycleArr(vals: number[], pos: number): boolean {
  return hasCycle(buildCycle(vals, pos));
}
