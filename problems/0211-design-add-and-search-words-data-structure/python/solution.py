class WordDictionary:
    """Design Add and Search Words — https://leetcode.com/problems/design-add-and-search-words-data-structure/"""

    def __init__(self):
        self.root = {}

    def addWord(self, word):
        node = self.root
        for c in word:
            node = node.setdefault(c, {})
        node["$"] = True

    def search(self, word):
        def dfs(node, i):
            if i == len(word):
                return "$" in node
            c = word[i]
            if c == ".":
                return any(k != "$" and dfs(child, i + 1) for k, child in node.items())
            if c not in node:
                return False
            return dfs(node[c], i + 1)

        return dfs(self.root, 0)


def wordDictionaryOps(ops, args):
    """Test driver: replay LeetCode-style operation/argument lists."""
    wd = WordDictionary()
    out = []
    for op, arg in zip(ops, args):
        if op == "WordDictionary":
            wd = WordDictionary()
            out.append(None)
        elif op == "addWord":
            wd.addWord(arg[0])
            out.append(None)
        elif op == "search":
            out.append(wd.search(arg[0]))
    return out
