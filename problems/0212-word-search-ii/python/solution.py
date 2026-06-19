def findWords(board, words):
    """Word Search II — https://leetcode.com/problems/word-search-ii/"""
    root = {}
    for w in words:
        node = root
        for c in w:
            node = node.setdefault(c, {})
        node["$"] = w

    rows, cols = len(board), len(board[0])
    found = set()

    def dfs(r, c, node):
        if r < 0 or c < 0 or r >= rows or c >= cols:
            return
        ch = board[r][c]
        nxt = node.get(ch)
        if nxt is None:
            return
        if "$" in nxt:
            found.add(nxt["$"])
        board[r][c] = "#"
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            dfs(r + dr, c + dc, nxt)
        board[r][c] = ch

    for r in range(rows):
        for c in range(cols):
            dfs(r, c, root)
    return list(found)
