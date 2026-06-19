def leastInterval(tasks, n):
    """Task Scheduler — https://leetcode.com/problems/task-scheduler/"""
    counts = {}
    for t in tasks:
        counts[t] = counts.get(t, 0) + 1
    max_freq = max(counts.values())
    max_count = sum(1 for c in counts.values() if c == max_freq)
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)
