// A binary heap ordered by a comparator (`less(a, b)` true => a is higher priority).
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

// Min Cost to Connect All Points — https://leetcode.com/problems/min-cost-to-connect-all-points/
export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const visited = new Array<boolean>(n).fill(false);
  const heap = new Heap<[number, number]>((a, b) => a[0] < b[0]); // (cost, node)
  heap.push([0, 0]);
  let total = 0;
  let count = 0;
  while (count < n && heap.size() > 0) {
    const [cost, i] = heap.pop();
    if (visited[i]) continue;
    visited[i] = true;
    total += cost;
    count++;
    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const d = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
        heap.push([d, j]);
      }
    }
  }
  return total;
}
