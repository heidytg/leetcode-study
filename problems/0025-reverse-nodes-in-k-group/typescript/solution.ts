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

// Reverse Nodes in k-Group — https://leetcode.com/problems/reverse-nodes-in-k-group/
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let node = head;
  let count = 0;
  while (node !== null && count < k) {
    node = node.next;
    count++;
  }
  if (count < k) return head;
  let prev = reverseKGroup(node, k); // process the remainder first
  let cur = head;
  for (let i = 0; i < k && cur !== null; i++) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}

export function reverseKGroupArr(vals: number[], k: number): number[] {
  return toArray(reverseKGroup(build(vals), k));
}
