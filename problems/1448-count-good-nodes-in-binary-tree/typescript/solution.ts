class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val = 0) {
    this.val = val;
  }
}

function fromLevel(vals: (number | null)[]): TreeNode | null {
  if (vals.length === 0 || vals[0] === null) return null;
  const root = new TreeNode(vals[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < vals.length) {
    const node = queue.shift();
    if (node === undefined) break;
    const lv = vals[i++];
    if (lv !== null && lv !== undefined) {
      node.left = new TreeNode(lv);
      queue.push(node.left);
    }
    const rv = vals[i++];
    if (rv !== null && rv !== undefined) {
      node.right = new TreeNode(rv);
      queue.push(node.right);
    }
  }
  return root;
}

// Count Good Nodes in Binary Tree — https://leetcode.com/problems/count-good-nodes-in-binary-tree/
function goodNodes(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, maxSoFar: number): number => {
    if (node === null) return 0;
    const good = node.val >= maxSoFar ? 1 : 0;
    const newMax = Math.max(maxSoFar, node.val);
    return good + dfs(node.left, newMax) + dfs(node.right, newMax);
  };
  return dfs(root, -Infinity);
}

export function goodNodesArr(vals: (number | null)[]): number {
  return goodNodes(fromLevel(vals));
}
