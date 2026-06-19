// Letter Combinations of a Phone Number — https://leetcode.com/problems/letter-combinations-of-a-phone-number/
export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const mapping: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const res: string[] = [];
  const backtrack = (i: number, curr: string): void => {
    if (i === digits.length) {
      res.push(curr);
      return;
    }
    for (const ch of mapping[digits[i]]) {
      backtrack(i + 1, curr + ch);
    }
  };
  backtrack(0, "");
  return res;
}
