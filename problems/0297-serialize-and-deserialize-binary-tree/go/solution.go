package solution

import (
	"strconv"
	"strings"
)

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

// Serialize — https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
func serialize(root *TreeNode) string {
	var sb strings.Builder
	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			sb.WriteString("#,")
			return
		}
		sb.WriteString(strconv.Itoa(node.Val))
		sb.WriteByte(',')
		dfs(node.Left)
		dfs(node.Right)
	}
	dfs(root)
	return sb.String()
}

func deserialize(data string) *TreeNode {
	tokens := strings.Split(data, ",")
	pos := 0
	var dfs func() *TreeNode
	dfs = func() *TreeNode {
		tok := tokens[pos]
		pos++
		if tok == "#" {
			return nil
		}
		val, _ := strconv.Atoi(tok)
		node := &TreeNode{Val: val}
		node.Left = dfs()
		node.Right = dfs()
		return node
	}
	return dfs()
}

func codecArr(vals []*int) []*int {
	return toLevel(deserialize(serialize(fromLevel(vals))))
}
