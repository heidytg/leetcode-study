// LRU Cache — https://leetcode.com/problems/lru-cache/
// JS Map preserves insertion order, so re-inserting moves a key to the "most recent" end.
class LRUCache {
  private capacity: number;
  private cache = new Map<number, number>();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const value = this.cache.get(key);
    if (value === undefined) return -1;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const oldest = this.cache.keys().next().value;
      if (oldest !== undefined) this.cache.delete(oldest);
    }
  }
}

// Test driver: replay LeetCode-style operation/argument lists (null for void ops).
export function lruCacheOps(ops: string[], args: number[][]): (number | null)[] {
  let cache = new LRUCache(0);
  const out: (number | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const arg = args[i];
    switch (ops[i]) {
      case "LRUCache":
        cache = new LRUCache(arg[0]);
        out.push(null);
        break;
      case "put":
        cache.put(arg[0], arg[1]);
        out.push(null);
        break;
      case "get":
        out.push(cache.get(arg[0]));
        break;
    }
  }
  return out;
}
