from collections import deque, defaultdict


def ladderLength(beginWord, endWord, wordList):
    """Word Ladder — https://leetcode.com/problems/word-ladder/"""
    words = set(wordList)
    if endWord not in words:
        return 0

    patterns = defaultdict(list)
    for w in words:
        for i in range(len(w)):
            patterns[w[:i] + "*" + w[i + 1:]].append(w)

    visited = {beginWord}
    queue = deque([(beginWord, 1)])
    while queue:
        word, length = queue.popleft()
        if word == endWord:
            return length
        for i in range(len(word)):
            for nxt in patterns[word[:i] + "*" + word[i + 1:]]:
                if nxt not in visited:
                    visited.add(nxt)
                    queue.append((nxt, length + 1))
    return 0
