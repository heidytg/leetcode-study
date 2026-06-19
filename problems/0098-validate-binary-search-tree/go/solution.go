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

// Validate Binary Search Tree — https://leetcode.com/problems/validate-binary-search-tree/
func isValidBST(root *TreeNode) bool {
	var valid func(node *TreeNode, low, high int) bool
	valid = func(node *TreeNode, low, high int) bool {
		if node == nil {
			return true
		}
		if node.Val <= low || node.Val >= high {
			return false
		}
		return valid(node.Left, low, node.Val) && valid(node.Right, node.Val, high)
	}
	return valid(root, math.MinInt, math.MaxInt)
}

func isValidBSTArr(vals []*int) bool {
	return isValidBST(fromLevel(vals))
}
