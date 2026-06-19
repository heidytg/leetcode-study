// Design Add and Search Words — https://leetcode.com/problems/design-add-and-search-words-data-structure/
class WordNode {
  children = new Map<string, WordNode>();
  end = false;
}

class WordDictionary {
  private root = new WordNode();

  addWord(word: string): void {
    let node = this.root;
    for (const c of word) {
      let next = node.children.get(c);
      if (next === undefined) {
        next = new WordNode();
        node.children.set(c, next);
      }
      node = next;
    }
    node.end = true;
  }

  search(word: string): boolean {
    const dfs = (node: WordNode, i: number): boolean => {
      if (i === word.length) return node.end;
      const c = word[i];
      if (c === ".") {
        for (const child of node.children.values()) {
          if (dfs(child, i + 1)) return true;
        }
        return false;
      }
      const next = node.children.get(c);
      if (next === undefined) return false;
      return dfs(next, i + 1);
    };
    return dfs(this.root, 0);
  }
}

export function wordDictionaryOps(ops: string[], args: string[][]): (boolean | null)[] {
  let wd = new WordDictionary();
  const out: (boolean | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const arg = args[i];
    switch (ops[i]) {
      case "WordDictionary":
        wd = new WordDictionary();
        out.push(null);
        break;
      case "addWord":
        wd.addWord(arg[0]);
        out.push(null);
        break;
      case "search":
        out.push(wd.search(arg[0]));
        break;
    }
  }
  return out;
}
