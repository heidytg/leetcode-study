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

// LCA of a BST — https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
  let cur = root;
  while (cur !== null) {
    if (p > cur.val && q > cur.val) cur = cur.right;
    else if (p < cur.val && q < cur.val) cur = cur.left;
    else return cur;
  }
  return null;
}

export function lcaArr(vals: (number | null)[], p: number, q: number): number {
  const lca = lowestCommonAncestor(fromLevel(vals), p, q);
  return lca === null ? -1 : lca.val;
}
