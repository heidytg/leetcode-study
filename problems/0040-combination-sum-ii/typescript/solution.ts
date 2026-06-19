// Combination Sum II — https://leetcode.com/problems/combination-sum-ii/
export function combinationSum2(candidates: number[], target: number): number[][] {
  const sorted = [...candidates].sort((a, b) => a - b);
  const res: number[][] = [];
  const combo: number[] = [];
  const backtrack = (start: number, remain: number): void => {
    if (remain === 0) {
      res.push([...combo]);
      return;
    }
    for (let i = start; i < sorted.length; i++) {
      if (i > start && sorted[i] === sorted[i - 1]) continue; // skip duplicate at this level
      if (sorted[i] > remain) break; // sorted: no later candidate fits
      combo.push(sorted[i]);
      backtrack(i + 1, remain - sorted[i]); // each used once -> i+1
      combo.pop();
    }
  };
  backtrack(0, target);
  return res;
}
