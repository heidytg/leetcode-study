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

// Binary Tree Right Side View — https://leetcode.com/problems/binary-tree-right-side-view/
function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) return res;
  let queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const next: TreeNode[] = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (i === queue.length - 1) res.push(node.val);
      if (node.left !== null) next.push(node.left);
      if (node.right !== null) next.push(node.right);
    }
    queue = next;
  }
  return res;
}

export function rightSideViewArr(vals: (number | null)[]): number[] {
  return rightSideView(fromLevel(vals));
}
