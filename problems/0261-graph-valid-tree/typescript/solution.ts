// Graph Valid Tree — https://leetcode.com/problems/graph-valid-tree/
export function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false; // a tree on n nodes has exactly n-1 edges
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };
  for (const [u, v] of edges) {
    const ru = find(u);
    const rv = find(v);
    if (ru === rv) return false; // cycle
    parent[ru] = rv;
  }
  return true;
}
