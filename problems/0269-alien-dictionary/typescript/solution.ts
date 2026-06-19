// Alien Dictionary — https://leetcode.com/problems/alien-dictionary/
export function alienOrder(words: string[]): string {
  const adj = new Map<string, Set<string>>();
  const indegree = new Map<string, number>();
  for (const w of words) {
    for (const c of w) {
      if (!adj.has(c)) {
        adj.set(c, new Set());
        indegree.set(c, 0);
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) {
      return ""; // invalid prefix ordering
    }
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        const set = adj.get(w1[j]);
        if (set !== undefined && !set.has(w2[j])) {
          set.add(w2[j]);
          indegree.set(w2[j], (indegree.get(w2[j]) ?? 0) + 1);
        }
        break;
      }
    }
  }

  const ready: string[] = [];
  for (const [c, d] of indegree) if (d === 0) ready.push(c);
  const res: string[] = [];
  while (ready.length > 0) {
    ready.sort(); // smallest-letter-first for determinism
    const c = ready.shift();
    if (c === undefined) break;
    res.push(c);
    for (const nb of adj.get(c) ?? []) {
      const d = (indegree.get(nb) ?? 0) - 1;
      indegree.set(nb, d);
      if (d === 0) ready.push(nb);
    }
  }

  return res.length === indegree.size ? res.join("") : "";
}
