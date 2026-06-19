class Heap<T> {
  private data: T[] = [];
  constructor(private less: (a: T, b: T) => boolean) {}

  size(): number {
    return this.data.length;
  }

  push(v: T): void {
    this.data.push(v);
    let i = this.data.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.less(this.data[i], this.data[p])) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }

  pop(): T {
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

// Network Delay Time — https://leetcode.com/problems/network-delay-time/
export function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = new Map<number, [number, number][]>();
  for (const [u, v, w] of times) {
    const list = graph.get(u) ?? [];
    list.push([v, w]);
    graph.set(u, list);
  }

  const dist = new Map<number, number>();
  const heap = new Heap<[number, number]>((a, b) => a[0] < b[0]); // (dist, node)
  heap.push([0, k]);
  while (heap.size() > 0) {
    const [d, node] = heap.pop();
    if (dist.has(node)) continue;
    dist.set(node, d);
    for (const [nei, w] of graph.get(node) ?? []) {
      if (!dist.has(nei)) heap.push([d + w, nei]);
    }
  }

  if (dist.size < n) return -1;
  return Math.max(...dist.values());
}
