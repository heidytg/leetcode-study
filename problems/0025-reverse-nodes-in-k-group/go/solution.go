package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func build(vals []int) *ListNode {
	dummy := &ListNode{}
	cur := dummy
	for _, v := range vals {
		cur.Next = &ListNode{Val: v}
		cur = cur.Next
	}
	return dummy.Next
}

func toSlice(head *ListNode) []int {
	out := []int{}
	for n := head; n != nil; n = n.Next {
		out = append(out, n.Val)
	}
	return out
}

// Reverse Nodes in k-Group — https://leetcode.com/problems/reverse-nodes-in-k-group/
func reverseKGroup(head *ListNode, k int) *ListNode {
	node := head
	count := 0
	for node != nil && count < k {
		node = node.Next
		count++
	}
	if count < k {
		return head
	}
	prev := reverseKGroup(node, k) // process the remainder first
	cur := head
	for i := 0; i < k; i++ {
		nxt := cur.Next
		cur.Next = prev
		prev = cur
		cur = nxt
	}
	return prev
}

func reverseKGroupArr(vals []int, k int) []int {
	return toSlice(reverseKGroup(build(vals), k))
}
