// Sliding Window Maximum — https://leetcode.com/problems/sliding-window-maximum/
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const dq: number[] = []; // indices, values decreasing front -> back
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
    dq.push(i);
    if (dq[0] <= i - k) dq.shift();
    if (i >= k - 1) res.push(nums[dq[0]]);
  }
  return res;
}
