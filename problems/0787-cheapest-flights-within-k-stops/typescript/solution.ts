// Cheapest Flights Within K Stops — https://leetcode.com/problems/cheapest-flights-within-k-stops/
export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  let dist = new Array<number>(n).fill(Infinity);
  dist[src] = 0;
  for (let i = 0; i <= k; i++) {
    const tmp = [...dist]; // snapshot: at most one new edge this round
    for (const [u, v, w] of flights) {
      if (dist[u] !== Infinity && dist[u] + w < tmp[v]) tmp[v] = dist[u] + w;
    }
    dist = tmp;
  }
  return dist[dst] === Infinity ? -1 : dist[dst];
}
