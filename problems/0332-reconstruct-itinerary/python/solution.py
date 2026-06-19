from collections import defaultdict


def findItinerary(tickets):
    """Reconstruct Itinerary — https://leetcode.com/problems/reconstruct-itinerary/"""
    graph = defaultdict(list)
    for src, dst in sorted(tickets, reverse=True):
        graph[src].append(dst)  # reverse-sorted so pop() gives smallest

    route = []
    stack = ["JFK"]
    while stack:
        while graph[stack[-1]]:
            stack.append(graph[stack[-1]].pop())
        route.append(stack.pop())
    return route[::-1]
