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

// Diameter of Binary Tree — https://leetcode.com/problems/diameter-of-binary-tree/
func diameterOfBinaryTree(root *TreeNode) int {
	best := 0
	var depth func(*TreeNode) int
	depth = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		left := depth(node.Left)
		right := depth(node.Right)
		if left+right > best {
			best = left + right
		}
		if left > right {
			return left + 1
		}
		return right + 1
	}
	depth(root)
	return best
}

func diameterOfBinaryTreeArr(vals []*int) int {
	return diameterOfBinaryTree(fromLevel(vals))
}
