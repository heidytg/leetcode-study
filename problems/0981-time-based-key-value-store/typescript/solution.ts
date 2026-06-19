// Time Based Key-Value Store — https://leetcode.com/problems/time-based-key-value-store/
class TimeMap {
  private store = new Map<string, { timestamp: number; value: string }[]>();

  set(key: string, value: string, timestamp: number): void {
    const entries = this.store.get(key);
    if (entries) entries.push({ timestamp, value });
    else this.store.set(key, [{ timestamp, value }]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.store.get(key) ?? [];
    let lo = 0;
    let hi = entries.length - 1;
    let res = "";
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (entries[mid].timestamp <= timestamp) {
        res = entries[mid].value;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return res;
  }
}

// Test driver: replay LeetCode-style operation/argument lists (null for void ops).
export function timeMapOps(ops: string[], args: (string | number)[][]): (string | null)[] {
  const tm = new TimeMap();
  const out: (string | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const arg = args[i];
    switch (ops[i]) {
      case "TimeMap":
        out.push(null);
        break;
      case "set":
        tm.set(String(arg[0]), String(arg[1]), Number(arg[2]));
        out.push(null);
        break;
      case "get":
        out.push(tm.get(String(arg[0]), Number(arg[1])));
        break;
    }
  }
  return out;
}
