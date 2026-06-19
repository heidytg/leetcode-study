// Kth Largest Element in an Array — https://leetcode.com/problems/kth-largest-element-in-an-array/
export function findKthLargest(nums: number[], k: number): number {
  return [...nums].sort((a, b) => b - a)[k - 1];
}
