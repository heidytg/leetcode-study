// Generate Parentheses — https://leetcode.com/problems/generate-parentheses/
export function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const backtrack = (current: string, open: number, close: number): void => {
    if (current.length === 2 * n) {
      res.push(current);
      return;
    }
    if (open < n) backtrack(current + "(", open + 1, close);
    if (close < open) backtrack(current + ")", open, close + 1);
  };
  backtrack("", 0, 0);
  return res;
}
