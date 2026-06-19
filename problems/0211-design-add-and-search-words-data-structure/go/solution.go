package solution

// Design Add and Search Words — https://leetcode.com/problems/design-add-and-search-words-data-structure/
type WordDictionary struct {
	children map[byte]*WordDictionary
	end      bool
}

func Constructor() WordDictionary {
	return WordDictionary{children: make(map[byte]*WordDictionary)}
}

func (d *WordDictionary) AddWord(word string) {
	node := d
	for i := 0; i < len(word); i++ {
		c := word[i]
		if node.children[c] == nil {
			node.children[c] = &WordDictionary{children: make(map[byte]*WordDictionary)}
		}
		node = node.children[c]
	}
	node.end = true
}

func (d *WordDictionary) Search(word string) bool {
	var dfs func(node *WordDictionary, i int) bool
	dfs = func(node *WordDictionary, i int) bool {
		if i == len(word) {
			return node.end
		}
		c := word[i]
		if c == '.' {
			for _, child := range node.children {
				if dfs(child, i+1) {
					return true
				}
			}
			return false
		}
		next := node.children[c]
		if next == nil {
			return false
		}
		return dfs(next, i+1)
	}
	return dfs(d, 0)
}

func wordDictionaryOps(ops []string, args [][]string) []*bool {
	var wd WordDictionary
	out := []*bool{}
	for i, op := range ops {
		switch op {
		case "WordDictionary":
			wd = Constructor()
			out = append(out, nil)
		case "addWord":
			wd.AddWord(args[i][0])
			out = append(out, nil)
		case "search":
			v := wd.Search(args[i][0])
			out = append(out, &v)
		}
	}
	return out
}
