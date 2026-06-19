def maxProfit(prices):
    """Best Time to Buy and Sell Stock — https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"""
    min_price = float("inf")
    best = 0
    for p in prices:
        if p < min_price:
            min_price = p
        elif p - min_price > best:
            best = p - min_price
    return best
