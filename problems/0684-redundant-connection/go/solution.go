package solution

// Redundant Connection — https://leetcode.com/problems/redundant-connection/
func findRedundantConnection(edges [][]int) []int {
	parent := make([]int, len(edges)+1)
	for i := range parent {
		parent[i] = i
	}
	var find func(x int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]] // path compression
			x = parent[x]
		}
		return x
	}
	for _, e := range edges {
		ru, rv := find(e[0]), find(e[1])
		if ru == rv {
			return []int{e[0], e[1]}
		}
		parent[ru] = rv
	}
	return []int{}
}
