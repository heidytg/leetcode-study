// Permutations — https://leetcode.com/problems/permutations/
export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrack = (curr: number[], remaining: number[]): void => {
    if (remaining.length === 0) {
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      backtrack(
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
      );
    }
  };
  backtrack([], nums);
  return res;
}
