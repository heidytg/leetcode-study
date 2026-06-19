# 150. Evaluate Reverse Polish Notation

https://leetcode.com/problems/evaluate-reverse-polish-notation/

- **Difficulty:** Medium
- **Pattern:** Stack-based expression evaluation
- **Category:** Stack
- **Tags:** array, stack, math

## Statement

Evaluate an arithmetic expression in Reverse Polish (postfix) Notation. Valid operators
are `+`, `-`, `*`, `/`. Division truncates toward zero. Return the integer result.

## Signature

`evalRPN(tokens: string[]) -> number`

## Constraints

- 1 ≤ tokens.length ≤ 10^4
- Each token is an operator or an integer in `[-200, 200]`.
- The expression is always valid; division never by zero.

## Approach

Postfix is built for stacks. Push operands. On an operator, pop the top two values
(`b` first, then `a`), apply `a op b`, and push the result. Order matters for `-` and
`/`: the second-popped operand is the left side. After consuming all tokens, the single
remaining stack value is the answer.

## Complexity

- **Time:** O(n) — one pass.
- **Space:** O(n) — operand stack.

## Pattern

**Stack expression evaluation.** The signal: evaluate postfix, or convert infix using
operator/operand stacks. Each operator consumes the most recent operands — LIFO. This is
the kernel of calculators and the shunting-yard algorithm.

## Interview notes

- **Brute force → optimal:** There's no simpler correct approach than the stack; the
  point is getting operand order and truncation right.
- **Key insight:** the first value popped is the *right* operand; division truncates
  toward zero (not floor — differs for negatives).
- **Edge cases:** negative results; `a/b` with negative operands (`6 / -132 → 0`);
  single number token.
- **Common mistakes:** swapping operands for `-`/`/`; using floor division instead of
  truncation; integer overflow in fixed-width languages.
- **Follow-ups:** evaluate infix with parentheses (224/227); shunting-yard conversion.
- **Related:** Valid Parentheses (20), Basic Calculator (224).
