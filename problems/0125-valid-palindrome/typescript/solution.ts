// Valid Palindrome — https://leetcode.com/problems/valid-palindrome/
export function isPalindrome(s: string): boolean {
  const isAlnum = (c: string): boolean => /[a-z0-9]/i.test(c);
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !isAlnum(s[i])) i++;
    while (i < j && !isAlnum(s[j])) j--;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;
}
