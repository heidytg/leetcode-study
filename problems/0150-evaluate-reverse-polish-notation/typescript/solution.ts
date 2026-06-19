// Evaluate Reverse Polish Notation — https://leetcode.com/problems/evaluate-reverse-polish-notation/
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const ops = new Set(["+", "-", "*", "/"]);
  for (const tok of tokens) {
    if (ops.has(tok)) {
      const b = stack.pop() ?? 0;
      const a = stack.pop() ?? 0;
      if (tok === "+") stack.push(a + b);
      else if (tok === "-") stack.push(a - b);
      else if (tok === "*") stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(tok));
    }
  }
  return stack[0];
}
