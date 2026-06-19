package solution

type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

// Copy List with Random Pointer — https://leetcode.com/problems/copy-list-with-random-pointer/
func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}
	clones := map[*Node]*Node{}
	for cur := head; cur != nil; cur = cur.Next {
		clones[cur] = &Node{Val: cur.Val}
	}
	for cur := head; cur != nil; cur = cur.Next {
		clones[cur].Next = clones[cur.Next]     // clones[nil] is nil
		clones[cur].Random = clones[cur.Random] // clones[nil] is nil
	}
	return clones[head]
}

func copyRandomListArr(data [][]*int) [][]*int {
	n := len(data)
	if n == 0 {
		return [][]*int{}
	}
	nodes := make([]*Node, n)
	for i := 0; i < n; i++ {
		nodes[i] = &Node{Val: *data[i][0]}
	}
	for i := 0; i < n; i++ {
		if i+1 < n {
			nodes[i].Next = nodes[i+1]
		}
		if data[i][1] != nil {
			nodes[i].Random = nodes[*data[i][1]]
		}
	}
	copied := copyRandomList(nodes[0])
	index := map[*Node]int{}
	i := 0
	for cur := copied; cur != nil; cur = cur.Next {
		index[cur] = i
		i++
	}
	out := [][]*int{}
	for cur := copied; cur != nil; cur = cur.Next {
		v := cur.Val
		var rnd *int
		if cur.Random != nil {
			r := index[cur.Random]
			rnd = &r
		}
		out = append(out, []*int{&v, rnd})
	}
	return out
}
