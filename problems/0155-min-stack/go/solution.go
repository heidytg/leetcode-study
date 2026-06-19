package solution

// Min Stack — https://leetcode.com/problems/min-stack/
type MinStack struct {
	stack []int
	mins  []int
}

func Constructor() MinStack {
	return MinStack{}
}

func (s *MinStack) Push(val int) {
	s.stack = append(s.stack, val)
	if len(s.mins) == 0 || val < s.mins[len(s.mins)-1] {
		s.mins = append(s.mins, val)
	} else {
		s.mins = append(s.mins, s.mins[len(s.mins)-1])
	}
}

func (s *MinStack) Pop() {
	s.stack = s.stack[:len(s.stack)-1]
	s.mins = s.mins[:len(s.mins)-1]
}

func (s *MinStack) Top() int {
	return s.stack[len(s.stack)-1]
}

func (s *MinStack) GetMin() int {
	return s.mins[len(s.mins)-1]
}

// minStackOps is the test driver: replay LeetCode-style operation/argument lists.
// nil entries represent void operations (null in the expected output).
func minStackOps(ops []string, args [][]int) []*int {
	s := Constructor()
	out := []*int{}
	for i, op := range ops {
		switch op {
		case "MinStack":
			out = append(out, nil)
		case "push":
			s.Push(args[i][0])
			out = append(out, nil)
		case "pop":
			s.Pop()
			out = append(out, nil)
		case "top":
			v := s.Top()
			out = append(out, &v)
		case "getMin":
			v := s.GetMin()
			out = append(out, &v)
		}
	}
	return out
}
