// Clone Graph — https://leetcode.com/problems/clone-graph/
class GraphNode {
  val: number;
  neighbors: GraphNode[] = [];
  constructor(val: number) {
    this.val = val;
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (node === null) return null;
  const clones = new Map<GraphNode, GraphNode>();
  const dfs = (n: GraphNode): GraphNode => {
    const existing = clones.get(n);
    if (existing !== undefined) return existing;
    const copy = new GraphNode(n.val);
    clones.set(n, copy);
    for (const nb of n.neighbors) copy.neighbors.push(dfs(nb));
    return copy;
  };
  return dfs(node);
}

export function cloneGraphArr(adjList: number[][]): number[][] {
  const n = adjList.length;
  if (n === 0) return [];
  const nodes = Array.from({ length: n }, (_, i) => new GraphNode(i + 1));
  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map((v) => nodes[v - 1]);
  });
  const cloned = cloneGraph(nodes[0]);
  const result: number[][] = Array.from({ length: n }, () => []);
  if (cloned === null) return result;
  const visited = new Set<number>([cloned.val]);
  const queue: GraphNode[] = [cloned];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur === undefined) break;
    result[cur.val - 1] = cur.neighbors.map((nb) => nb.val);
    for (const nb of cur.neighbors) {
      if (!visited.has(nb.val)) {
        visited.add(nb.val);
        queue.push(nb);
      }
    }
  }
  return result;
}
