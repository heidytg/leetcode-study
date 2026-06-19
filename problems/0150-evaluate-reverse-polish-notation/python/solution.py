def evalRPN(tokens):
    """Evaluate Reverse Polish Notation — https://leetcode.com/problems/evaluate-reverse-polish-notation/"""
    stack = []
    ops = {"+", "-", "*", "/"}
    for tok in tokens:
        if tok in ops:
            b = stack.pop()
            a = stack.pop()
            if tok == "+":
                stack.append(a + b)
            elif tok == "-":
                stack.append(a - b)
            elif tok == "*":
                stack.append(a * b)
            else:
                stack.append(int(a / b))  # truncate toward zero
        else:
            stack.append(int(tok))
    return stack[0]
