// Reconstruct Itinerary — https://leetcode.com/problems/reconstruct-itinerary/
export function findItinerary(tickets: string[][]): string[] {
  const graph = new Map<string, string[]>();
  for (const [src, dst] of tickets) {
    const list = graph.get(src) ?? [];
    list.push(dst);
    graph.set(src, list);
  }
  for (const list of graph.values()) list.sort().reverse(); // pop() gives smallest

  const route: string[] = [];
  const stack = ["JFK"];
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    const dests = graph.get(top);
    if (dests !== undefined && dests.length > 0) {
      const next = dests.pop();
      if (next !== undefined) stack.push(next);
    } else {
      const last = stack.pop();
      if (last !== undefined) route.push(last);
    }
  }
  return route.reverse();
}
