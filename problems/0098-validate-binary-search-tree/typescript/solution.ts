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

// Validate Binary Search Tree — https://leetcode.com/problems/validate-binary-search-tree/
function isValidBST(root: TreeNode | null): boolean {
  const valid = (node: TreeNode | null, low: number, high: number): boolean => {
    if (node === null) return true;
    if (node.val <= low || node.val >= high) return false;
    return valid(node.left, low, node.val) && valid(node.right, node.val, high);
  };
  return valid(root, -Infinity, Infinity);
}

export function isValidBSTArr(vals: (number | null)[]): boolean {
  return isValidBST(fromLevel(vals));
}
