class MaxHeap {
  private data: number[] = [];

  size(): number {
    return this.data.length;
  }

  push(val: number): void {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.data[parent] >= this.data[i]) break;
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
        let largest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < n && this.data[l] > this.data[largest]) largest = l;
        if (r < n && this.data[r] > this.data[largest]) largest = r;
        if (largest === i) break;
        [this.data[largest], this.data[i]] = [this.data[i], this.data[largest]];
        i = largest;
      }
    }
    return top;
  }
}

// Last Stone Weight — https://leetcode.com/problems/last-stone-weight/
export function lastStoneWeight(stones: number[]): number {
  const heap = new MaxHeap();
  for (const s of stones) heap.push(s);
  while (heap.size() > 1) {
    const a = heap.pop();
    const b = heap.pop();
    if (a !== b) heap.push(a - b);
  }
  return heap.size() === 0 ? 0 : heap.pop();
}
