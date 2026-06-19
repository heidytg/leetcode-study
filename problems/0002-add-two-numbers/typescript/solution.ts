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

// Add Two Numbers — https://leetcode.com/problems/add-two-numbers/
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
  }
  return dummy.next;
}

export function addTwoNumbersArr(a: number[], b: number[]): number[] {
  return toArray(addTwoNumbers(build(a), build(b)));
}
