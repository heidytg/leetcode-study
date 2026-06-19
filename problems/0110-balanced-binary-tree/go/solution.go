package solution

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

// Balanced Binary Tree — https://leetcode.com/problems/balanced-binary-tree/
func isBalanced(root *TreeNode) bool {
	var height func(*TreeNode) int
	height = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		left := height(node.Left)
		if left == -1 {
			return -1
		}
		right := height(node.Right)
		if right == -1 {
			return -1
		}
		diff := left - right
		if diff < -1 || diff > 1 {
			return -1
		}
		if left > right {
			return left + 1
		}
		return right + 1
	}
	return height(root) != -1
}

func isBalancedArr(vals []*int) bool {
	return isBalanced(fromLevel(vals))
}
