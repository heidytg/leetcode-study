class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val = 0) {
    this.val = val;
  }
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

// Construct Binary Tree from Preorder and Inorder — https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const index = new Map<number, number>();
  inorder.forEach((v, i) => index.set(v, i));
  let pre = 0;
  const helper = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;
    const val = preorder[pre++];
    const node = new TreeNode(val);
    const mid = index.get(val) ?? 0;
    node.left = helper(left, mid - 1);
    node.right = helper(mid + 1, right);
    return node;
  };
  return helper(0, inorder.length - 1);
}

export function buildTreeArr(preorder: number[], inorder: number[]): (number | null)[] {
  return toLevel(buildTree(preorder, inorder));
}
