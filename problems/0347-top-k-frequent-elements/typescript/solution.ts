// Top K Frequent Elements — https://leetcode.com/problems/top-k-frequent-elements/
export function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();
  for (const n of nums) counts.set(n, (counts.get(n) ?? 0) + 1);

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [n, c] of counts) buckets[c].push(n);

  const res: number[] = [];
  for (let c = buckets.length - 1; c > 0 && res.length < k; c--) {
    for (const n of buckets[c]) {
      res.push(n);
      if (res.length === k) break;
    }
  }
  return res;
}
