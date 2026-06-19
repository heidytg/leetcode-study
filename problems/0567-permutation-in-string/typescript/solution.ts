// Permutation in String — https://leetcode.com/problems/permutation-in-string/
export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;
  const need = new Array<number>(26).fill(0);
  const window = new Array<number>(26).fill(0);
  const idx = (c: string): number => c.charCodeAt(0) - 97;
  for (const c of s1) need[idx(c)]++;
  for (let i = 0; i < s2.length; i++) {
    window[idx(s2[i])]++;
    if (i >= s1.length) window[idx(s2[i - s1.length])]--;
    if (need.every((v, j) => v === window[j])) return true;
  }
  return false;
}
