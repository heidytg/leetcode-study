package solution

// Implement Trie (Prefix Tree) — https://leetcode.com/problems/implement-trie-prefix-tree/
type Trie struct {
	children map[byte]*Trie
	end      bool
}

func Constructor() Trie {
	return Trie{children: make(map[byte]*Trie)}
}

func (t *Trie) Insert(word string) {
	node := t
	for i := 0; i < len(word); i++ {
		c := word[i]
		if node.children[c] == nil {
			node.children[c] = &Trie{children: make(map[byte]*Trie)}
		}
		node = node.children[c]
	}
	node.end = true
}

func (t *Trie) find(s string) *Trie {
	node := t
	for i := 0; i < len(s); i++ {
		next := node.children[s[i]]
		if next == nil {
			return nil
		}
		node = next
	}
	return node
}

func (t *Trie) Search(word string) bool {
	node := t.find(word)
	return node != nil && node.end
}

func (t *Trie) StartsWith(prefix string) bool {
	return t.find(prefix) != nil
}

func trieOps(ops []string, args [][]string) []*bool {
	var trie Trie
	out := []*bool{}
	for i, op := range ops {
		switch op {
		case "Trie":
			trie = Constructor()
			out = append(out, nil)
		case "insert":
			trie.Insert(args[i][0])
			out = append(out, nil)
		case "search":
			v := trie.Search(args[i][0])
			out = append(out, &v)
		case "startsWith":
			v := trie.StartsWith(args[i][0])
			out = append(out, &v)
		}
	}
	return out
}
