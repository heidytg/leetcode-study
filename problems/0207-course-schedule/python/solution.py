def canFinish(numCourses, prerequisites):
    """Course Schedule — https://leetcode.com/problems/course-schedule/"""
    graph = [[] for _ in range(numCourses)]
    for course, pre in prerequisites:
        graph[course].append(pre)

    state = [0] * numCourses  # 0 = unvisited, 1 = visiting, 2 = done

    def dfs(c):
        if state[c] == 1:
            return False  # back edge -> cycle
        if state[c] == 2:
            return True
        state[c] = 1
        for pre in graph[c]:
            if not dfs(pre):
                return False
        state[c] = 2
        return True

    return all(dfs(c) for c in range(numCourses))
