// K Closest Points to Origin — https://leetcode.com/problems/k-closest-points-to-origin/
export function kClosest(points: number[][], k: number): number[][] {
  const dist = (p: number[]): number => p[0] * p[0] + p[1] * p[1];
  return [...points].sort((a, b) => dist(a) - dist(b)).slice(0, k);
}
