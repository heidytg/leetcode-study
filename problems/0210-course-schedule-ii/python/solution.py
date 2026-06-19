import heapq


def findOrder(numCourses, prerequisites):
    """Course Schedule II — https://leetcode.com/problems/course-schedule-ii/"""
    graph = [[] for _ in range(numCourses)]
    indegree = [0] * numCourses
    for course, pre in prerequisites:
        graph[pre].append(course)  # pre -> course
        indegree[course] += 1

    heap = [c for c in range(numCourses) if indegree[c] == 0]
    heapq.heapify(heap)  # smallest-available-first for determinism
    order = []
    while heap:
        c = heapq.heappop(heap)
        order.append(c)
        for nxt in graph[c]:
            indegree[nxt] -= 1
            if indegree[nxt] == 0:
                heapq.heappush(heap, nxt)

    return order if len(order) == numCourses else []
