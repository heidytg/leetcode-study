// Course Schedule II — https://leetcode.com/problems/course-schedule-ii/
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree = new Array<number>(numCourses).fill(0);
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course); // pre -> course
    indegree[course]++;
  }

  const ready: number[] = [];
  for (let c = 0; c < numCourses; c++) {
    if (indegree[c] === 0) ready.push(c);
  }

  const order: number[] = [];
  while (ready.length > 0) {
    ready.sort((a, b) => a - b); // smallest-available-first for determinism
    const c = ready.shift();
    if (c === undefined) break;
    order.push(c);
    for (const nxt of graph[c]) {
      indegree[nxt]--;
      if (indegree[nxt] === 0) ready.push(nxt);
    }
  }

  return order.length === numCourses ? order : [];
}
