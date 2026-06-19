// N-Queens — https://leetcode.com/problems/n-queens/
export function solveNQueens(n: number): string[][] {
  const res: string[][] = [];
  const cols = new Set<number>();
  const anti = new Set<number>(); // r + c
  const main = new Set<number>(); // r - c
  const board: string[][] = Array.from({ length: n }, () => new Array<string>(n).fill("."));

  const backtrack = (r: number): void => {
    if (r === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || anti.has(r + c) || main.has(r - c)) continue;
      cols.add(c);
      anti.add(r + c);
      main.add(r - c);
      board[r][c] = "Q";
      backtrack(r + 1);
      board[r][c] = ".";
      cols.delete(c);
      anti.delete(r + c);
      main.delete(r - c);
    }
  };

  backtrack(0);
  return res;
}
