# Chapter 07: If / Else Statements

This folder contains hands-on examples covering JavaScript conditional statements using `if`, `else if`, and `else`, along with real-world scenarios and interview-style questions (IQ).

---

## File Index

| # | File | Topic | Description |
|---|------|-------|-------------|
| 1 | `48_IF_ESLE.js` | Basic If / Else | Voting eligibility based on age |
| 2 | `49_If_elseif_else.js` | If / Else If / Else | Student grade calculation with multiple conditions |
| 3 | `50_REAL_IF_ELSE.js` | Nested If / Else | Role-based access control (admin, editor, viewer) |
| 4 | `51_API_IF_ELSE.js` | API Status Checks | Handling HTTP status codes with conditionals |
| 5 | `52_IQ_IF_ELSE.js` | Truthy & Falsy Values | Interview questions on truthy/falsy evaluations |
| 6 | `53_IF_ELSE_real.js` | Real-World Login | Username, password, and account lock check |
| 7 | `54_IQ.js` | Single-Line If | One-liner `if` without curly braces |
| 8 | `55_If_or_Else.js` | Valid `if` Syntax | Demonstrates that a standalone `if` is allowed, but `else` alone is not |

---

## Topics Covered

### 1. Basic If / Else
- Simple two-way branching
- Example: checking if age is above 18

### 2. If / Else If / Else
- Multi-way branching for more than two outcomes
- Example: assigning letter grades based on score ranges

### 3. Nested If / Else
- Conditions inside conditions
- Example: checking login status first, then checking user role

### 4. Real-World Scenarios
- **API responses**: reacting to different status codes (`200`, `404`, etc.)
- **Login systems**: validating username, password, and account status together

### 5. Truthy & Falsy Values
- **Truthy**: non-zero numbers, non-empty strings, objects, arrays
- **Falsy**: `0`, `""`, `null`, `undefined`, `NaN`, `false`
- Interview edge cases and common gotchas

### 6. Syntax Rules
- A standalone `if` block is valid
- A standalone `else` block is **not** valid without a preceding `if`
- Single-line `if` without curly braces is allowed but not recommended for readability

---

## Key Takeaways

| Rule | Recommendation |
|------|----------------|
| Always use | Clear conditions with parentheses |
| Prefer | `===` and `!==` inside conditions |
| Remember | `0`, `""`, `null`, `undefined`, `NaN`, `false` are all falsy |
| Avoid | Deep nesting when possible; flatten with `else if` |
| Be careful | Any non-zero number (including negatives) is truthy |

---

## Running the Examples

You can run any file using Node.js:

```bash
node 48_IF_ESLE.js
node 50_REAL_IF_ELSE.js
node 53_IF_ELSE_real.js
```

---

> This chapter is part of the **Learn Playwright 2X** JavaScript fundamentals series.
