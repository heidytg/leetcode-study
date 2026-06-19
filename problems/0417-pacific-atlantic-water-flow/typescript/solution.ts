// Pacific Atlantic Water Flow — https://leetcode.com/problems/pacific-atlantic-water-flow/
export function pacificAtlantic(heights: number[][]): number[][] {
  if (heights.length === 0) return [];
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => new Array<boolean>(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => new Array<boolean>(cols).fill(false));

  const dfs = (r: number, c: number, visited: boolean[][], prev: number): void => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c] || heights[r][c] < prev) return;
    visited[r][c] = true;
    const h = heights[r][c];
    dfs(r + 1, c, visited, h);
    dfs(r - 1, c, visited, h);
    dfs(r, c + 1, visited, h);
    dfs(r, c - 1, visited, h);
  };

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, heights[0][c]);
    dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights[r][0]);
    dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
  }

  const res: number[][] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] && atlantic[r][c]) res.push([r, c]);
    }
  }
  return res;
}
