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

// Reorder List — https://leetcode.com/problems/reorder-list/
func reorderList(head *ListNode) {
	if head == nil || head.Next == nil {
		return
	}
	// 1) find middle
	slow, fast := head, head
	for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	// 2) reverse second half
	second := slow.Next
	slow.Next = nil
	var prev *ListNode
	for second != nil {
		nxt := second.Next
		second.Next = prev
		prev = second
		second = nxt
	}
	// 3) merge halves
	first, sec := head, prev
	for sec != nil {
		n1, n2 := first.Next, sec.Next
		first.Next = sec
		sec.Next = n1
		first, sec = n1, n2
	}
}

func reorderListArr(vals []int) []int {
	head := build(vals)
	reorderList(head)
	return toSlice(head)
}
