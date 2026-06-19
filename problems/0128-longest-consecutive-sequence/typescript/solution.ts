// Longest Consecutive Sequence — https://leetcode.com/problems/longest-consecutive-sequence/
export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;
  for (const n of set) {
    if (set.has(n - 1)) continue;
    let length = 1;
    while (set.has(n + length)) length++;
    longest = Math.max(longest, length);
  }
  return longest;
}
