// Combination Sum — https://leetcode.com/problems/combination-sum/
export function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const combo: number[] = [];
  const backtrack = (start: number, remain: number): void => {
    if (remain === 0) {
      res.push([...combo]);
      return;
    }
    if (remain < 0) return;
    for (let i = start; i < candidates.length; i++) {
      combo.push(candidates[i]);
      backtrack(i, remain - candidates[i]); // reuse allowed -> i
      combo.pop();
    }
  };
  backtrack(0, target);
  return res;
}
