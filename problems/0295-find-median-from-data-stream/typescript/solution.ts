// A binary heap ordered by a comparator (`less(a, b)` true => a is higher priority).
class Heap {
  private data: number[] = [];
  constructor(private less: (a: number, b: number) => boolean) {}

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
      const p = (i - 1) >> 1;
      if (!this.less(this.data[i], this.data[p])) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
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
        let best = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < n && this.less(this.data[l], this.data[best])) best = l;
        if (r < n && this.less(this.data[r], this.data[best])) best = r;
        if (best === i) break;
        [this.data[best], this.data[i]] = [this.data[i], this.data[best]];
        i = best;
      }
    }
    return top;
  }
}

// Find Median from Data Stream — https://leetcode.com/problems/find-median-from-data-stream/
class MedianFinder {
  private small = new Heap((a, b) => a > b); // max-heap: lower half
  private large = new Heap((a, b) => a < b); // min-heap: upper half

  addNum(num: number): void {
    this.small.push(num);
    this.large.push(this.small.pop());
    if (this.large.size() > this.small.size()) {
      this.small.push(this.large.pop());
    }
  }

  findMedian(): number {
    if (this.small.size() > this.large.size()) return this.small.peek();
    return (this.small.peek() + this.large.peek()) / 2;
  }
}

export function medianFinderOps(ops: string[], args: number[][]): number[] {
  let mf = new MedianFinder();
  const out: number[] = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "MedianFinder") mf = new MedianFinder();
    else if (ops[i] === "addNum") mf.addNum(args[i][0]);
    else if (ops[i] === "findMedian") out.push(mf.findMedian());
  }
  return out;
}
