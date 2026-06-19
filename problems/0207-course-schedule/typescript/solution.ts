// Course Schedule — https://leetcode.com/problems/course-schedule/
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) graph[course].push(pre);

  const state = new Array<number>(numCourses).fill(0); // 0 unvisited, 1 visiting, 2 done
  const dfs = (c: number): boolean => {
    if (state[c] === 1) return false; // back edge -> cycle
    if (state[c] === 2) return true;
    state[c] = 1;
    for (const pre of graph[c]) {
      if (!dfs(pre)) return false;
    }
    state[c] = 2;
    return true;
  };

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) return false;
  }
  return true;
}
