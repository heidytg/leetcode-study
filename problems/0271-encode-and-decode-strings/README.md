# 271. Encode and Decode Strings

https://leetcode.com/problems/encode-and-decode-strings/

- **Difficulty:** Medium
- **Pattern:** Length-prefixed serialization
- **Category:** Arrays & Hashing
- **Tags:** string, design, serialization

## Statement

Design an algorithm to encode a list of strings into a single string, and decode that
single string back into the original list. The strings may contain any ASCII
characters, including digits, `#`, and the empty string.

## Signature

`encode(strs: string[]) -> string`
`decode(s: string) -> string[]`

## Constraints

- 0 ≤ strs.length ≤ 200
- 0 ≤ strs[i].length ≤ 200
- Any character is allowed in the strings.

## Approach

Length-prefix each string: write its length, a `#` delimiter, then the raw characters —
e.g. `["lc","ode"]` → `"2#lc3#ode"`. To decode, read digits up to the next `#` to get a
length `L`, then take exactly the next `L` characters as one string, and repeat. Because
the count tells us precisely how many characters to consume, the content can safely
contain `#` or digits — no escaping needed.

## Complexity

- **Time:** O(total characters) for both encode and decode.
- **Space:** O(total characters) for the encoded string / decoded list.

## Pattern

**Length-prefixed framing.** The signal: serialize variable-length records into one
stream and recover them unambiguously. Prefixing each record with its length (rather
than relying on a delimiter that could appear in the data) is the robust, escaping-free
technique used by real network/file protocols.

## Interview notes

- **Brute force → optimal:** Joining on a delimiter like `,` fails when the delimiter
  appears in the data; escaping works but is fiddly. Length-prefixing is clean and
  delimiter-safe — lead with why the naive delimiter approach breaks.
- **Key insight:** the length count, not the `#`, is what bounds each field, so data may
  contain `#` and digits freely.
- **Edge cases:** empty list `[]` → `""`; list containing the empty string `[""]` →
  `"0#"`; strings that themselves contain `#` or leading digits.
- **Common mistakes:** splitting on `#` (breaks when content has `#`); off-by-one in the
  slice bounds.
- **Follow-ups:** Unicode/bytes → prefix by byte length and operate on bytes.
- **Related:** Serialize and Deserialize Binary Tree (297).

> Note: this problem exposes two functions, so its tests do a `decode(encode(x)) == x`
> round-trip rather than using the generic single-function harness.
