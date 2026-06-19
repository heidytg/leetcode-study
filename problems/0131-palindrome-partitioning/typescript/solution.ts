// Palindrome Partitioning — https://leetcode.com/problems/palindrome-partitioning/
export function partition(s: string): string[][] {
  const res: string[][] = [];
  const part: string[] = [];

  const isPal = (l: number, r: number): boolean => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  const backtrack = (start: number): void => {
    if (start === s.length) {
      res.push([...part]);
      return;
    }
    for (let end = start; end < s.length; end++) {
      if (isPal(start, end)) {
        part.push(s.slice(start, end + 1));
        backtrack(end + 1);
        part.pop();
      }
    }
  };

  backtrack(0);
  return res;
}
