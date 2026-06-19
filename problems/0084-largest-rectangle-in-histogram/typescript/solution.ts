// Largest Rectangle in Histogram — https://leetcode.com/problems/largest-rectangle-in-histogram/
export function largestRectangleArea(heights: number[]): number {
  const stack: { start: number; height: number }[] = []; // heights increasing
  let best = 0;
  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1].height > h) {
      const top = stack[stack.length - 1];
      stack.pop();
      best = Math.max(best, top.height * (i - top.start));
      start = top.start;
    }
    stack.push({ start, height: h });
  }
  const n = heights.length;
  for (const b of stack) {
    best = Math.max(best, b.height * (n - b.start));
  }
  return best;
}
