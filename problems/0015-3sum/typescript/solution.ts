// 3Sum — https://leetcode.com/problems/3sum/
export function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const res: number[][] = [];
  const n = sorted.length;
  for (let i = 0; i < n; i++) {
    if (sorted[i] > 0) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const total = sorted[i] + sorted[left] + sorted[right];
      if (total < 0) {
        left++;
      } else if (total > 0) {
        right--;
      } else {
        res.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      }
    }
  }
  return res;
}
