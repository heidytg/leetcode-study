// Word Ladder — https://leetcode.com/problems/word-ladder/
export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const words = new Set(wordList);
  if (!words.has(endWord)) return 0;

  const patterns = new Map<string, string[]>();
  for (const w of words) {
    for (let i = 0; i < w.length; i++) {
      const p = w.slice(0, i) + "*" + w.slice(i + 1);
      const list = patterns.get(p) ?? [];
      list.push(w);
      patterns.set(p, list);
    }
  }

  const visited = new Set<string>([beginWord]);
  let queue: [string, number][] = [[beginWord, 1]];
  while (queue.length > 0) {
    const next: [string, number][] = [];
    for (const [word, length] of queue) {
      if (word === endWord) return length;
      for (let i = 0; i < word.length; i++) {
        const p = word.slice(0, i) + "*" + word.slice(i + 1);
        for (const nxt of patterns.get(p) ?? []) {
          if (!visited.has(nxt)) {
            visited.add(nxt);
            next.push([nxt, length + 1]);
          }
        }
      }
    }
    queue = next;
  }
  return 0;
}
