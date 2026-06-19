// Median of Two Sorted Arrays — https://leetcode.com/problems/median-of-two-sorted-arrays/
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let A = nums1;
  let B = nums2;
  if (A.length > B.length) [A, B] = [B, A];
  const m = A.length;
  const n = B.length;
  const half = Math.floor((m + n + 1) / 2);
  let lo = 0;
  let hi = m;
  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2);
    const j = half - i;
    const aLeft = i > 0 ? A[i - 1] : -Infinity;
    const aRight = i < m ? A[i] : Infinity;
    const bLeft = j > 0 ? B[j - 1] : -Infinity;
    const bRight = j < n ? B[j] : Infinity;
    if (aLeft <= bRight && bLeft <= aRight) {
      if ((m + n) % 2 === 1) return Math.max(aLeft, bLeft);
      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    }
    if (aLeft > bRight) hi = i - 1;
    else lo = i + 1;
  }
  return 0;
}
