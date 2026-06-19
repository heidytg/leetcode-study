// Minimum Window Substring — https://leetcode.com/problems/minimum-window-substring/
export function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";
  const need = new Map<string, number>();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);
  const required = need.size;
  const window = new Map<string, number>();
  let have = 0;
  let bestLen = Infinity;
  let bestLeft = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) ?? 0) + 1);
    if (need.has(c) && window.get(c) === need.get(c)) have++;
    while (have === required) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestLeft = left;
      }
      const lc = s[left];
      window.set(lc, (window.get(lc) ?? 0) - 1);
      if (need.has(lc) && (window.get(lc) ?? 0) < (need.get(lc) ?? 0)) have--;
      left++;
    }
  }
  return bestLen === Infinity ? "" : s.slice(bestLeft, bestLeft + bestLen);
}
