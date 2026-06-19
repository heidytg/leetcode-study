// Encode a list of strings to a single string.
export function encode(strs: string[]): string {
  return strs.map((s) => `${s.length}#${s}`).join("");
}

// Decode a single string back to the list of strings.
export function decode(s: string): string[] {
  const res: string[] = [];
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") j++;
    const length = Number(s.slice(i, j));
    const start = j + 1;
    res.push(s.slice(start, start + length));
    i = start + length;
  }
  return res;
}
