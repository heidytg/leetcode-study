# 20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

- **Difficulty:** Easy
- **Pattern:** Stack for matching pairs (LIFO)
- **Category:** Stack
- **Tags:** string, stack

## Statement

Given a string `s` of just `()[]{}`, return `true` if every opening bracket is closed by
the same type in the correct order, and every closing bracket has a matching opener.

## Signature

`isValid(s: string) -> boolean`

## Constraints

- 1 ≤ s.length ≤ 10^4
- `s` consists only of `()[]{}`.

## Approach

Push every opening bracket. On a closing bracket, the most recently opened bracket must
be its match — so pop the stack and compare. If the stack is empty when closing, or the
popped opener is the wrong type, it's invalid. A non-empty stack at the end means
unclosed openers.

## Complexity

- **Time:** O(n) — one pass.
- **Space:** O(n) — worst case all openers.

## Pattern

**Stack for nested matching.** The signal: validate or process nested/last-opened-first
structure (brackets, tags, undo). The most-recent unmatched item must resolve first —
exactly LIFO. The foundation for expression parsing and the monotonic-stack problems.

## Interview notes

- **Brute force → optimal:** Repeatedly removing matched pairs (`"()" → ""`) is O(n²).
  The stack is O(n).
- **Key insight:** map each closer to its opener and check the top on every close.
- **Edge cases:** odd length (can't be valid); leading closer (empty stack); single type.
- **Common mistakes:** not checking empty stack before popping; returning `true` without
  verifying the stack ended empty.
- **Follow-ups:** validity with a wildcard `*` → *Valid Parenthesis String* (678);
  longest valid substring → (32).
- **Related:** Min Stack (155), Generate Parentheses (22).
