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

// Diameter of Binary Tree — https://leetcode.com/problems/diameter-of-binary-tree/
function diameterOfBinaryTree(root: TreeNode | null): number {
  let best = 0;
  const depth = (node: TreeNode | null): number => {
    if (node === null) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    best = Math.max(best, left + right);
    return 1 + Math.max(left, right);
  };
  depth(root);
  return best;
}

export function diameterOfBinaryTreeArr(vals: (number | null)[]): number {
  return diameterOfBinaryTree(fromLevel(vals));
}
