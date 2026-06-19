// Implement Trie (Prefix Tree) — https://leetcode.com/problems/implement-trie-prefix-tree/
class TrieNode {
  children = new Map<string, TrieNode>();
  end = false;
}

class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const c of word) {
      let next = node.children.get(c);
      if (next === undefined) {
        next = new TrieNode();
        node.children.set(c, next);
      }
      node = next;
    }
    node.end = true;
  }

  private find(s: string): TrieNode | null {
    let node: TrieNode = this.root;
    for (const c of s) {
      const next = node.children.get(c);
      if (next === undefined) return null;
      node = next;
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.find(word);
    return node !== null && node.end;
  }

  startsWith(prefix: string): boolean {
    return this.find(prefix) !== null;
  }
}

export function trieOps(ops: string[], args: string[][]): (boolean | null)[] {
  let trie = new Trie();
  const out: (boolean | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const arg = args[i];
    switch (ops[i]) {
      case "Trie":
        trie = new Trie();
        out.push(null);
        break;
      case "insert":
        trie.insert(arg[0]);
        out.push(null);
        break;
      case "search":
        out.push(trie.search(arg[0]));
        break;
      case "startsWith":
        out.push(trie.startsWith(arg[0]));
        break;
    }
  }
  return out;
}
