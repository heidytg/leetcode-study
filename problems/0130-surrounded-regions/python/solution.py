def solve(board):
    """Surrounded Regions — https://leetcode.com/problems/surrounded-regions/"""
    if not board:
        return board
    rows, cols = len(board), len(board[0])

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != "O":
            return
        board[r][c] = "T"  # mark border-connected
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        dfs(r, 0)
        dfs(r, cols - 1)
    for c in range(cols):
        dfs(0, c)
        dfs(rows - 1, c)

    for r in range(rows):
        for c in range(cols):
            if board[r][c] == "O":
                board[r][c] = "X"   # surrounded -> capture
            elif board[r][c] == "T":
                board[r][c] = "O"   # border-connected -> restore
    return board
