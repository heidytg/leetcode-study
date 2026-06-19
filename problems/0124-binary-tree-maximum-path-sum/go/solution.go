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

// Binary Tree Maximum Path Sum — https://leetcode.com/problems/binary-tree-maximum-path-sum/
func maxPathSum(root *TreeNode) int {
	best := math.MinInt
	var gain func(*TreeNode) int
	gain = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		left := gain(node.Left)
		if left < 0 {
			left = 0
		}
		right := gain(node.Right)
		if right < 0 {
			right = 0
		}
		if node.Val+left+right > best {
			best = node.Val + left + right
		}
		if left > right {
			return node.Val + left
		}
		return node.Val + right
	}
	gain(root)
	return best
}

func maxPathSumArr(vals []*int) int {
	return maxPathSum(fromLevel(vals))
}
