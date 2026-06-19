package solution

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func fromLevel(vals []*int) *TreeNode {
	if len(vals) == 0 || vals[0] == nil {
		return nil
	}
	root := &TreeNode{Val: *vals[0]}
	queue := []*TreeNode{root}
	i := 1
	for len(queue) > 0 && i < len(vals) {
		node := queue[0]
		queue = queue[1:]
		if i < len(vals) && vals[i] != nil {
			node.Left = &TreeNode{Val: *vals[i]}
			queue = append(queue, node.Left)
		}
		i++
		if i < len(vals) && vals[i] != nil {
			node.Right = &TreeNode{Val: *vals[i]}
			queue = append(queue, node.Right)
		}
		i++
	}
	return root
}

// Count Good Nodes in Binary Tree — https://leetcode.com/problems/count-good-nodes-in-binary-tree/
func goodNodes(root *TreeNode) int {
	var dfs func(node *TreeNode, maxSoFar int) int
	dfs = func(node *TreeNode, maxSoFar int) int {
		if node == nil {
			return 0
		}
		good := 0
		if node.Val >= maxSoFar {
			good = 1
		}
		newMax := maxSoFar
		if node.Val > newMax {
			newMax = node.Val
		}
		return good + dfs(node.Left, newMax) + dfs(node.Right, newMax)
	}
	return dfs(root, math.MinInt)
}

func goodNodesArr(vals []*int) int {
	return goodNodes(fromLevel(vals))
}
