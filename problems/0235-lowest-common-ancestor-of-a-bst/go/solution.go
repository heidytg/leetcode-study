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

// LCA of a BST — https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
func lowestCommonAncestor(root *TreeNode, p, q int) *TreeNode {
	cur := root
	for cur != nil {
		if p > cur.Val && q > cur.Val {
			cur = cur.Right
		} else if p < cur.Val && q < cur.Val {
			cur = cur.Left
		} else {
			return cur
		}
	}
	return nil
}

func lcaArr(vals []*int, p, q int) int {
	return lowestCommonAncestor(fromLevel(vals), p, q).Val
}
