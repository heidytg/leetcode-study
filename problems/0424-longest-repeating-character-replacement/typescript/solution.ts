// Longest Repeating Character Replacement — https://leetcode.com/problems/longest-repeating-character-replacement/
export function characterReplacement(s: string, k: number): number {
  const counts = new Map<string, number>();
  let start = 0;
  let maxFreq = 0;
  let best = 0;
  for (let end = 0; end < s.length; end++) {
    const c = s[end];
    const next = (counts.get(c) ?? 0) + 1;
    counts.set(c, next);
    maxFreq = Math.max(maxFreq, next);
    while (end - start + 1 - maxFreq > k) {
      counts.set(s[start], (counts.get(s[start]) ?? 0) - 1);
      start++;
    }
    best = Math.max(best, end - start + 1);
  }
  return best;
}
