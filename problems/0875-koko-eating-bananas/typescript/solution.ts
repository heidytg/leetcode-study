// Koko Eating Bananas — https://leetcode.com/problems/koko-eating-bananas/
export function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1;
  let hi = Math.max(...piles);
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    let hours = 0;
    for (const p of piles) hours += Math.ceil(p / mid);
    if (hours <= h) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
