class RandomNode {
  val: number;
  next: RandomNode | null = null;
  random: RandomNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

// Copy List with Random Pointer — https://leetcode.com/problems/copy-list-with-random-pointer/
function copyRandomList(head: RandomNode | null): RandomNode | null {
  if (head === null) return null;
  const clones = new Map<RandomNode, RandomNode>();
  for (let cur: RandomNode | null = head; cur !== null; cur = cur.next) {
    clones.set(cur, new RandomNode(cur.val));
  }
  for (let cur: RandomNode | null = head; cur !== null; cur = cur.next) {
    const clone = clones.get(cur);
    if (clone === undefined) continue;
    clone.next = cur.next !== null ? clones.get(cur.next) ?? null : null;
    clone.random = cur.random !== null ? clones.get(cur.random) ?? null : null;
  }
  return clones.get(head) ?? null;
}

export function copyRandomListArr(data: (number | null)[][]): (number | null)[][] {
  if (data.length === 0) return [];
  const nodes = data.map((item) => new RandomNode(Number(item[0])));
  for (let i = 0; i < data.length; i++) {
    if (i + 1 < data.length) nodes[i].next = nodes[i + 1];
    const r = data[i][1];
    if (r !== null) nodes[i].random = nodes[r];
  }
  const copied = copyRandomList(nodes[0]);
  const index = new Map<RandomNode, number>();
  let i = 0;
  for (let cur = copied; cur !== null; cur = cur.next) index.set(cur, i++);
  const out: (number | null)[][] = [];
  for (let cur = copied; cur !== null; cur = cur.next) {
    const rnd = cur.random !== null ? index.get(cur.random) ?? null : null;
    out.push([cur.val, rnd]);
  }
  return out;
}
