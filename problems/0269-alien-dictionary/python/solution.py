import heapq


def alienOrder(words):
    """Alien Dictionary — https://leetcode.com/problems/alien-dictionary/"""
    adj = {c: set() for w in words for c in w}
    indegree = {c: 0 for c in adj}

    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        min_len = min(len(w1), len(w2))
        if len(w1) > len(w2) and w1[:min_len] == w2[:min_len]:
            return ""  # invalid: prefix appears after the longer word
        for j in range(min_len):
            if w1[j] != w2[j]:
                if w2[j] not in adj[w1[j]]:
                    adj[w1[j]].add(w2[j])
                    indegree[w2[j]] += 1
                break

    heap = [c for c in indegree if indegree[c] == 0]
    heapq.heapify(heap)  # smallest-letter-first for determinism
    res = []
    while heap:
        c = heapq.heappop(heap)
        res.append(c)
        for nei in adj[c]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                heapq.heappush(heap, nei)

    return "".join(res) if len(res) == len(indegree) else ""
