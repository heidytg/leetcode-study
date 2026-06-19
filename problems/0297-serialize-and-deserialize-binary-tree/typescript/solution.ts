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

// Serialize — https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
function serialize(root: TreeNode | null): string {
  const out: string[] = [];
  const dfs = (node: TreeNode | null): void => {
    if (node === null) {
      out.push("#");
      return;
    }
    out.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return out.join(",");
}

function deserialize(data: string): TreeNode | null {
  const tokens = data.split(",");
  let pos = 0;
  const dfs = (): TreeNode | null => {
    const tok = tokens[pos++];
    if (tok === "#") return null;
    const node = new TreeNode(Number(tok));
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
}

export function codecArr(vals: (number | null)[]): (number | null)[] {
  return toLevel(deserialize(serialize(fromLevel(vals))));
}
