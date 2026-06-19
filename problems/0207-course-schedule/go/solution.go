package solution

// Course Schedule — https://leetcode.com/problems/course-schedule/
func canFinish(numCourses int, prerequisites [][]int) bool {
	graph := make([][]int, numCourses)
	for _, p := range prerequisites {
		graph[p[0]] = append(graph[p[0]], p[1])
	}
	state := make([]int, numCourses) // 0 unvisited, 1 visiting, 2 done
	var dfs func(c int) bool
	dfs = func(c int) bool {
		if state[c] == 1 {
			return false // back edge -> cycle
		}
		if state[c] == 2 {
			return true
		}
		state[c] = 1
		for _, pre := range graph[c] {
			if !dfs(pre) {
				return false
			}
		}
		state[c] = 2
		return true
	}
	for c := 0; c < numCourses; c++ {
		if !dfs(c) {
			return false
		}
	}
	return true
}
