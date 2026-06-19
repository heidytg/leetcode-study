class MinHeap {
  private data: number[] = [];

  size(): number {
    return this.data.length;
  }

  peek(): number {
    return this.data[0];
  }

  push(val: number): void {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.data[parent] <= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }

  pop(): number {
    const top = this.data[0];
    const last = this.data.pop();
    if (last !== undefined && this.data.length > 0) {
      this.data[0] = last;
      let i = 0;
      const n = this.data.length;
      while (true) {
        let smallest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < n && this.data[l] < this.data[smallest]) smallest = l;
        if (r < n && this.data[r] < this.data[smallest]) smallest = r;
        if (smallest === i) break;
        [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
        i = smallest;
      }
    }
    return top;
  }
}

// Kth Largest Element in a Stream — https://leetcode.com/problems/kth-largest-element-in-a-stream/
class KthLargest {
  private k: number;
  private heap = new MinHeap();

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (const n of nums) this.add(n);
  }

  add(val: number): number {
    this.heap.push(val);
    while (this.heap.size() > this.k) this.heap.pop();
    return this.heap.peek();
  }
}

export function kthLargestOps(ops: string[], args: unknown[][]): (number | null)[] {
  let obj = new KthLargest(0, []);
  const out: (number | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const arg = args[i];
    if (ops[i] === "KthLargest") {
      obj = new KthLargest(arg[0] as number, arg[1] as number[]);
      out.push(null);
    } else {
      out.push(obj.add(arg[0] as number));
    }
  }
  return out;
}
