// Task Scheduler — https://leetcode.com/problems/task-scheduler/
export function leastInterval(tasks: string[], n: number): number {
  const counts = new Map<string, number>();
  for (const t of tasks) counts.set(t, (counts.get(t) ?? 0) + 1);

  let maxFreq = 0;
  for (const c of counts.values()) maxFreq = Math.max(maxFreq, c);

  let maxCount = 0;
  for (const c of counts.values()) if (c === maxFreq) maxCount++;

  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
}
