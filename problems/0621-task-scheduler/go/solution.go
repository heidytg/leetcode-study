package solution

// Task Scheduler — https://leetcode.com/problems/task-scheduler/
func leastInterval(tasks []string, n int) int {
	counts := map[string]int{}
	for _, t := range tasks {
		counts[t]++
	}
	maxFreq := 0
	for _, c := range counts {
		if c > maxFreq {
			maxFreq = c
		}
	}
	maxCount := 0
	for _, c := range counts {
		if c == maxFreq {
			maxCount++
		}
	}
	res := (maxFreq-1)*(n+1) + maxCount
	if len(tasks) > res {
		res = len(tasks)
	}
	return res
}
