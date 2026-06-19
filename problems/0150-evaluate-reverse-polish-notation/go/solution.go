package solution

import "strconv"

// Evaluate Reverse Polish Notation — https://leetcode.com/problems/evaluate-reverse-polish-notation/
func evalRPN(tokens []string) int {
	stack := []int{}
	for _, tok := range tokens {
		switch tok {
		case "+", "-", "*", "/":
			b := stack[len(stack)-1]
			a := stack[len(stack)-2]
			stack = stack[:len(stack)-2]
			var r int
			switch tok {
			case "+":
				r = a + b
			case "-":
				r = a - b
			case "*":
				r = a * b
			default:
				r = a / b // Go integer division truncates toward zero
			}
			stack = append(stack, r)
		default:
			n, _ := strconv.Atoi(tok)
			stack = append(stack, n)
		}
	}
	return stack[0]
}
