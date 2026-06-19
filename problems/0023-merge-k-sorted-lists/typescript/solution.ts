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

function mergeTwo(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 !== null ? l1 : l2;
  return dummy.next;
}

// Merge k Sorted Lists — https://leetcode.com/problems/merge-k-sorted-lists/
function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    const merged: (ListNode | null)[] = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      merged.push(mergeTwo(lists[i], l2));
    }
    lists = merged;
  }
  return lists[0];
}

export function mergeKListsArr(arrays: number[][]): number[] {
  return toArray(mergeKLists(arrays.map((a) => build(a))));
}
