package solution

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func toLevel(root *TreeNode) []*int {
	out := []*int{}
	if root == nil {
		return out
	}
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		if node != nil {
			v := node.Val
			out = append(out, &v)
			queue = append(queue, node.Left, node.Right)
		} else {
			out = append(out, nil)
		}
	}
	for len(out) > 0 && out[len(out)-1] == nil {
		out = out[:len(out)-1]
	}
	return out
}

// Construct Binary Tree from Preorder and Inorder — https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
func buildTree(preorder, inorder []int) *TreeNode {
	index := make(map[int]int, len(inorder))
	for i, v := range inorder {
		index[v] = i
	}
	pre := 0
	var helper func(left, right int) *TreeNode
	helper = func(left, right int) *TreeNode {
		if left > right {
			return nil
		}
		val := preorder[pre]
		pre++
		node := &TreeNode{Val: val}
		mid := index[val]
		node.Left = helper(left, mid-1)
		node.Right = helper(mid+1, right)
		return node
	}
	return helper(0, len(inorder)-1)
}

func buildTreeArr(preorder, inorder []int) []*int {
	return toLevel(buildTree(preorder, inorder))
}
