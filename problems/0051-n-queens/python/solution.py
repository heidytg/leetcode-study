def solveNQueens(n):
    """N-Queens — https://leetcode.com/problems/n-queens/"""
    res = []
    cols = set()
    anti = set()  # r + c
    main = set()  # r - c
    board = [["."] * n for _ in range(n)]

    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r + c) in anti or (r - c) in main:
                continue
            cols.add(c)
            anti.add(r + c)
            main.add(r - c)
            board[r][c] = "Q"
            backtrack(r + 1)
            board[r][c] = "."
            cols.discard(c)
            anti.discard(r + c)
            main.discard(r - c)

    backtrack(0)
    return res
