package solution

import "sort"

// Reconstruct Itinerary — https://leetcode.com/problems/reconstruct-itinerary/
func findItinerary(tickets [][]string) []string {
	graph := map[string][]string{}
	for _, t := range tickets {
		graph[t[0]] = append(graph[t[0]], t[1])
	}
	for k := range graph {
		sort.Sort(sort.Reverse(sort.StringSlice(graph[k]))) // pop() gives smallest
	}

	route := []string{}
	stack := []string{"JFK"}
	for len(stack) > 0 {
		top := stack[len(stack)-1]
		if dests := graph[top]; len(dests) > 0 {
			stack = append(stack, dests[len(dests)-1])
			graph[top] = dests[:len(dests)-1]
		} else {
			route = append(route, top)
			stack = stack[:len(stack)-1]
		}
	}

	for i, j := 0, len(route)-1; i < j; i, j = i+1, j-1 {
		route[i], route[j] = route[j], route[i]
	}
	return route
}
