package solution

import "sort"

// Alien Dictionary — https://leetcode.com/problems/alien-dictionary/
func alienOrder(words []string) string {
	adj := map[byte]map[byte]bool{}
	indegree := map[byte]int{}
	for _, w := range words {
		for i := 0; i < len(w); i++ {
			if _, ok := adj[w[i]]; !ok {
				adj[w[i]] = map[byte]bool{}
				indegree[w[i]] = 0
			}
		}
	}

	for i := 0; i < len(words)-1; i++ {
		w1, w2 := words[i], words[i+1]
		minLen := len(w1)
		if len(w2) < minLen {
			minLen = len(w2)
		}
		if len(w1) > len(w2) && w1[:minLen] == w2[:minLen] {
			return "" // invalid prefix ordering
		}
		for j := 0; j < minLen; j++ {
			if w1[j] != w2[j] {
				if !adj[w1[j]][w2[j]] {
					adj[w1[j]][w2[j]] = true
					indegree[w2[j]]++
				}
				break
			}
		}
	}

	ready := []byte{}
	for c := range indegree {
		if indegree[c] == 0 {
			ready = append(ready, c)
		}
	}
	res := []byte{}
	for len(ready) > 0 {
		sort.Slice(ready, func(i, j int) bool { return ready[i] < ready[j] }) // smallest-first
		c := ready[0]
		ready = ready[1:]
		res = append(res, c)
		for nb := range adj[c] {
			indegree[nb]--
			if indegree[nb] == 0 {
				ready = append(ready, nb)
			}
		}
	}

	if len(res) == len(indegree) {
		return string(res)
	}
	return ""
}
