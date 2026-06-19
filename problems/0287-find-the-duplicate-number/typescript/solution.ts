// Find the Duplicate Number — https://leetcode.com/problems/find-the-duplicate-number/
export function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  let slow2 = 0;
  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }
  return slow;
}
