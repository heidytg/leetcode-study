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

function toLevel(root: TreeNode | null): (number | null)[] {
  const out: (number | null)[] = [];
  if (root === null) return out;
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === undefined) break;
    if (node === null) {
      out.push(null);
    } else {
      out.push(node.val);
      queue.push(node.left, node.right);
    }
  }
  while (out.length > 0 && out[out.length - 1] === null) out.pop();
  return out;
}

// Invert Binary Tree — https://leetcode.com/problems/invert-binary-tree/
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

export function invertTreeArr(vals: (number | null)[]): (number | null)[] {
  return toLevel(invertTree(fromLevel(vals)));
}
