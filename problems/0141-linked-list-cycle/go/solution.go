package solution

type ListNode struct {
	Val  int
	Next *ListNode
}

func buildCycle(vals []int, pos int) *ListNode {
	dummy := &ListNode{}
	cur := dummy
	nodes := []*ListNode{}
	for _, v := range vals {
		cur.Next = &ListNode{Val: v}
		cur = cur.Next
		nodes = append(nodes, cur)
	}
	if pos >= 0 && pos < len(nodes) {
		cur.Next = nodes[pos]
	}
	return dummy.Next
}

// Linked List Cycle — https://leetcode.com/problems/linked-list-cycle/
func hasCycle(head *ListNode) bool {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			return true
		}
	}
	return false
}

func hasCycleArr(vals []int, pos int) bool {
	return hasCycle(buildCycle(vals, pos))
}
