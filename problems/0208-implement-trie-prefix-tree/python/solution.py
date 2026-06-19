class Trie:
    """Implement Trie (Prefix Tree) — https://leetcode.com/problems/implement-trie-prefix-tree/"""

    def __init__(self):
        self.root = {}

    def insert(self, word):
        node = self.root
        for c in word:
            node = node.setdefault(c, {})
        node["$"] = True

    def _find(self, s):
        node = self.root
        for c in s:
            if c not in node:
                return None
            node = node[c]
        return node

    def search(self, word):
        node = self._find(word)
        return node is not None and "$" in node

    def startsWith(self, prefix):
        return self._find(prefix) is not None


def trieOps(ops, args):
    """Test driver: replay LeetCode-style operation/argument lists."""
    trie = Trie()
    out = []
    for op, arg in zip(ops, args):
        if op == "Trie":
            trie = Trie()
            out.append(None)
        elif op == "insert":
            trie.insert(arg[0])
            out.append(None)
        elif op == "search":
            out.append(trie.search(arg[0]))
        elif op == "startsWith":
            out.append(trie.startsWith(arg[0]))
    return out
