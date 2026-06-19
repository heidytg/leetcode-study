// Best Time to Buy and Sell Stock — https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let best = 0;
  for (const p of prices) {
    if (p < minPrice) minPrice = p;
    else if (p - minPrice > best) best = p - minPrice;
  }
  return best;
}
