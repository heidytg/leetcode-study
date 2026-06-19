// Subsets II — https://leetcode.com/problems/subsets-ii/
export function subsetsWithDup(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const res: number[][] = [];
  const subset: number[] = [];
  const backtrack = (start: number): void => {
    res.push([...subset]);
    for (let i = start; i < sorted.length; i++) {
      if (i > start && sorted[i] === sorted[i - 1]) continue; // skip duplicate at this level
      subset.push(sorted[i]);
      backtrack(i + 1);
      subset.pop();
    }
  };
  backtrack(0);
  return res;
}
