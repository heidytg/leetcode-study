// Longest Substring Without Repeating Characters — https://leetcode.com/problems/longest-substring-without-repeating-characters/
export function lengthOfLongestSubstring(s: string): number {
  const last = new Map<string, number>();
  let start = 0;
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const j = last.get(c);
    if (j !== undefined && j >= start) start = j + 1;
    last.set(c, i);
    best = Math.max(best, i - start + 1);
  }
  return best;
}
