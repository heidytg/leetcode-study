package solution

// Word Ladder — https://leetcode.com/problems/word-ladder/
func ladderLength(beginWord, endWord string, wordList []string) int {
	words := map[string]bool{}
	for _, w := range wordList {
		words[w] = true
	}
	if !words[endWord] {
		return 0
	}

	patterns := map[string][]string{}
	for w := range words {
		for i := 0; i < len(w); i++ {
			p := w[:i] + "*" + w[i+1:]
			patterns[p] = append(patterns[p], w)
		}
	}

	visited := map[string]bool{beginWord: true}
	type item struct {
		word   string
		length int
	}
	queue := []item{{beginWord, 1}}
	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		if cur.word == endWord {
			return cur.length
		}
		for i := 0; i < len(cur.word); i++ {
			p := cur.word[:i] + "*" + cur.word[i+1:]
			for _, nxt := range patterns[p] {
				if !visited[nxt] {
					visited[nxt] = true
					queue = append(queue, item{nxt, cur.length + 1})
				}
			}
		}
	}
	return 0
}
