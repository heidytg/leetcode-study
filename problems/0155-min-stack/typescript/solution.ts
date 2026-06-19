// Min Stack — https://leetcode.com/problems/min-stack/
class MinStack {
  private stack: number[] = [];
  private mins: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const min = this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]);
    this.mins.push(min);
  }

  pop(): void {
    this.stack.pop();
    this.mins.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

// Test driver: replay LeetCode-style operation/argument lists (null for void ops).
export function minStackOps(ops: string[], args: number[][]): (number | null)[] {
  const stack = new MinStack();
  const out: (number | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "MinStack":
        out.push(null);
        break;
      case "push":
        stack.push(args[i][0]);
        out.push(null);
        break;
      case "pop":
        stack.pop();
        out.push(null);
        break;
      case "top":
        out.push(stack.top());
        break;
      case "getMin":
        out.push(stack.getMin());
        break;
    }
  }
  return out;
}
