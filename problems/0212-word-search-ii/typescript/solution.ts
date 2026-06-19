// Word Search II — https://leetcode.com/problems/word-search-ii/
interface TrieNode {
  children: Map<string, TrieNode>;
  word: string | null;
}

function newNode(): TrieNode {
  return { children: new Map(), word: null };
}

export function findWords(board: string[][], words: string[]): string[] {
  const root = newNode();
  for (const w of words) {
    let cur = root;
    for (const ch of w) {
      let next = cur.children.get(ch);
      if (next === undefined) {
        next = newNode();
        cur.children.set(ch, next);
      }
      cur = next;
    }
    cur.word = w;
  }

  const rows = board.length;
  const cols = board[0].length;
  const found = new Set<string>();

  const dfs = (r: number, c: number, node: TrieNode): void => {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    const ch = board[r][c];
    const next = node.children.get(ch);
    if (next === undefined) return;
    if (next.word !== null) found.add(next.word);
    board[r][c] = "#";
    dfs(r + 1, c, next);
    dfs(r - 1, c, next);
    dfs(r, c + 1, next);
    dfs(r, c - 1, next);
    board[r][c] = ch;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return [...found];
}
