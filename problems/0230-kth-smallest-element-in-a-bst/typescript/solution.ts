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

// Kth Smallest Element in a BST — https://leetcode.com/problems/kth-smallest-element-in-a-bst/
function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let cur = root;
  while (stack.length > 0 || cur !== null) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    if (node === undefined) break;
    k--;
    if (k === 0) return node.val;
    cur = node.right;
  }
  return -1;
}

export function kthSmallestArr(vals: (number | null)[], k: number): number {
  return kthSmallest(fromLevel(vals), k);
}
