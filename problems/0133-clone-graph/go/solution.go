package solution

// Clone Graph — https://leetcode.com/problems/clone-graph/
type GraphNode struct {
	Val       int
	Neighbors []*GraphNode
}

func cloneGraph(node *GraphNode) *GraphNode {
	if node == nil {
		return nil
	}
	clones := map[*GraphNode]*GraphNode{}
	var dfs func(n *GraphNode) *GraphNode
	dfs = func(n *GraphNode) *GraphNode {
		if c, ok := clones[n]; ok {
			return c
		}
		copy := &GraphNode{Val: n.Val}
		clones[n] = copy
		for _, nb := range n.Neighbors {
			copy.Neighbors = append(copy.Neighbors, dfs(nb))
		}
		return copy
	}
	return dfs(node)
}

func cloneGraphArr(adjList [][]int) [][]int {
	n := len(adjList)
	if n == 0 {
		return [][]int{}
	}
	nodes := make([]*GraphNode, n)
	for i := 0; i < n; i++ {
		nodes[i] = &GraphNode{Val: i + 1}
	}
	for i, neighbors := range adjList {
		for _, v := range neighbors {
			nodes[i].Neighbors = append(nodes[i].Neighbors, nodes[v-1])
		}
	}
	cloned := cloneGraph(nodes[0])
	result := make([][]int, n)
	for i := range result {
		result[i] = []int{}
	}
	visited := map[int]bool{cloned.Val: true}
	queue := []*GraphNode{cloned}
	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		vals := []int{}
		for _, nb := range cur.Neighbors {
			vals = append(vals, nb.Val)
			if !visited[nb.Val] {
				visited[nb.Val] = true
				queue = append(queue, nb)
			}
		}
		result[cur.Val-1] = vals
	}
	return result
}
