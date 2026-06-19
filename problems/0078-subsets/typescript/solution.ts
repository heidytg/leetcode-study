// Subsets — https://leetcode.com/problems/subsets/
export function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];
  const backtrack = (i: number): void => {
    if (i === nums.length) {
      res.push([...subset]);
      return;
    }
    subset.push(nums[i]); // include
    backtrack(i + 1);
    subset.pop(); // exclude
    backtrack(i + 1);
  };
  backtrack(0);
  return res;
}
