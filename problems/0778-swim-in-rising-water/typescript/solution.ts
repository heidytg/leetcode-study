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

// Swim in Rising Water — https://leetcode.com/problems/swim-in-rising-water/
export function swimInWater(grid: number[][]): number {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
  const heap = new Heap<[number, number, number]>((a, b) => a[0] < b[0]); // (maxElevation, r, c)
  heap.push([grid[0][0], 0, 0]);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (heap.size() > 0) {
    const [t, r, c] = heap.pop();
    if (visited[r][c]) continue;
    visited[r][c] = true;
    if (r === n - 1 && c === n - 1) return t;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < n && nc < n && !visited[nr][nc]) {
        heap.push([Math.max(t, grid[nr][nc]), nr, nc]);
      }
    }
  }
  return -1;
}
