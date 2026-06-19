package solution

// Graph Valid Tree — https://leetcode.com/problems/graph-valid-tree/
func validTree(n int, edges [][]int) bool {
	if len(edges) != n-1 {
		return false // a tree on n nodes has exactly n-1 edges
	}
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	var find func(x int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	for _, e := range edges {
		ru, rv := find(e[0]), find(e[1])
		if ru == rv {
			return false // cycle
		}
		parent[ru] = rv
	}
	return true
}
