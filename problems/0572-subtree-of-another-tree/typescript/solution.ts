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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Subtree of Another Tree — https://leetcode.com/problems/subtree-of-another-tree/
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (subRoot === null) return true;
  if (root === null) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

export function isSubtreeArr(rootVals: (number | null)[], subVals: (number | null)[]): boolean {
  return isSubtree(fromLevel(rootVals), fromLevel(subVals));
}
