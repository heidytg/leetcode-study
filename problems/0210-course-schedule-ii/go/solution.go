package solution

import "sort"

// Course Schedule II — https://leetcode.com/problems/course-schedule-ii/
func findOrder(numCourses int, prerequisites [][]int) []int {
	graph := make([][]int, numCourses)
	indegree := make([]int, numCourses)
	for _, p := range prerequisites {
		graph[p[1]] = append(graph[p[1]], p[0]) // pre -> course
		indegree[p[0]]++
	}

	ready := []int{}
	for c := 0; c < numCourses; c++ {
		if indegree[c] == 0 {
			ready = append(ready, c)
		}
	}

	order := []int{}
	for len(ready) > 0 {
		sort.Ints(ready) // smallest-available-first for determinism
		c := ready[0]
		ready = ready[1:]
		order = append(order, c)
		for _, nxt := range graph[c] {
			indegree[nxt]--
			if indegree[nxt] == 0 {
				ready = append(ready, nxt)
			}
		}
	}

	if len(order) == numCourses {
		return order
	}
	return []int{}
}
