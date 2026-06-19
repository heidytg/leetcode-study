// Daily Temperatures — https://leetcode.com/problems/daily-temperatures/
export function dailyTemperatures(temperatures: number[]): number[] {
  const res = new Array<number>(temperatures.length).fill(0);
  const stack: number[] = []; // indices, temperatures decreasing
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const j = stack[stack.length - 1];
      stack.pop();
      res[j] = i - j;
    }
    stack.push(i);
  }
  return res;
}
