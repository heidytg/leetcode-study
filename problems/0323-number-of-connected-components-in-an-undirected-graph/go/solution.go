package solution

// Number of Connected Components — https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
func countComponents(n int, edges [][]int) int {
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
	count := n
	for _, e := range edges {
		ru, rv := find(e[0]), find(e[1])
		if ru != rv {
			parent[ru] = rv
			count--
		}
	}
	return count
}
