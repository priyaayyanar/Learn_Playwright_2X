# Chapter 06: JavaScript Operators

This folder contains hands-on examples covering all major JavaScript operators with practical code samples and interview-style questions (IQ).

---

## File Index

| # | File | Topic | Description |
|---|------|-------|-------------|
| 1 | `30_assignment_operator.js` | Assignment (`=`) | Basic assignment and value reassignment |
| 2 | `31_arithmatic_operator.js` | Arithmetic (`+ - * /`) | Addition, subtraction, multiplication, division |
| 3 | `32_modulus_operator.js` | Modulus (`%`) | Remainder operator, even/odd check logic |
| 4 | `33_exponential_operator.js` | Exponentiation (`**`) | Power operator |
| 5 | `34_IQ.js` | Compound Assignment (`+= -= *= /= %=`) | Shorthand assignment operators |
| 6 | `35_comparsion_operator.js` | Comparison (`> < >= <=`) | Relational / comparison operators |
| 7 | `36_comparsion_strict_loose.js` | Loose (`==`) vs Strict (`===`) | Equality and type coercion |
| 8 | `37_IQ_Loose_Strict.js` | Null vs Undefined Equality | Special rules for `null` and `undefined` |
| 9 | `38_confusing_comparison.js` | Confusing Comparisons | Tricky coercion edge cases and interview gotchas |
| 10 | `39_logical_operator.js` | Logical (`&& \|\| !`) | AND, OR, NOT gates |
| 11 | `40_strg_cnctn.js` | String Concatenation (`+=`) | Combining strings |
| 12 | `41_ternary_operator.js` | Ternary (`? :`) | Conditional expressions and nested ternary |
| 13 | `42_type_operator.js` | `typeof` Operator | Checking variable types |
| 14 | `43_incr_decre_operator.js` | Pre & Post Increment/Decrement | Basic `++a`, `a++`, `--a`, `a--` |
| 15 | `44_null_operator.js` | Nullish Coalescing (`??`) | Fallback when value is `null` or `undefined` |
| 16 | `45_post_increment.js` | Post Increment Example | Simple `a++` behavior |
| 17 | `46_IQ_Inc_Dec_Op.js` | Post Increment IQ | Interview-style post increment question |
| 18 | `47_Advance_Inc_Dec_Op.js` | Advanced Inc/Dec | Complex expressions with mixed pre/post increment |

---

## Topics Covered

### 1. Assignment Operators
- Simple assignment (`=`)
- Reassigning values to variables

### 2. Arithmetic Operators
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)

### 3. Modulus & Exponentiation
- `%` — Returns the remainder (useful for even/odd checks)
- `**` — Returns the power (e.g., `2 ** 3` → `8`)

### 4. Compound Assignment Operators
- `+=`, `-=`, `*=`, `/=`, `%=`
- Shorthand for updating a variable in place

### 5. Comparison Operators
- Relational: `>`, `<`, `>=`, `<=`
- Loose equality: `==` (with type coercion)
- Strict equality: `===` (no type coercion)
- `!=` and `!==` for inequality

### 6. Confusing Comparisons & Gotchas
- `null` and `undefined` behavior with `==` and `>=`
- Transitivity broken: `"" == 0`, `"0" == 0`, but `"" != "0"`
- Booleans coerce to numbers: `true == 1`, `false == 0`
- `NaN` is never equal to anything (even itself)
- Array/object coercion to primitives

### 7. Logical Operators
- `&&` — AND
- `\|\|` — OR
- `!` — NOT

### 8. String Concatenation
- Using `+=` to build strings dynamically

### 9. Ternary Operator (`condition ? value_if_true : value_if_false`)
- Simple conditions (voting eligibility, test results)
- Nested ternary for multiple conditions
- Real-world examples: base URLs, browser modes, HTTP status categories

### 10. `typeof` Operator
- Checking types: `string`, `number`, `boolean`, `undefined`, `object`
- Known quirk: `typeof null` returns `"object"`

### 11. Increment / Decrement Operators
- Pre-increment: `++a` (increment first, then use)
- Post-increment: `a++` (use first, then increment)
- Pre-decrement: `--a`
- Post-decrement: `a--`
- Advanced: mixed expressions with multiple increments

### 12. Nullish Coalescing (`??`)
- Returns right-hand side **only** when left is `null` or `undefined`
- Different from `||` which treats all falsy values (`0`, `""`, `false`) as missing
- Real-world examples: default values for cart, missing config values

---

## Key Takeaways

| Rule | Recommendation |
|------|----------------|
| Always prefer | `===` and `!==` over `==` and `!=` |
| Use `==` only for | `null` / `undefined` checks: `if (x == null)` |
| `null >= 0` | is `true` (coerces to `0`) — be careful! |
| `NaN == NaN` | is always `false` — use `Number.isNaN()` |
| `typeof null` | returns `"object"` (legacy bug) |
| `??` vs `\|\|` | `??` only checks `null`/`undefined`; `\|\|` checks all falsy values |
| `++a` vs `a++` | Pre changes value before use; post changes after use |

---

## Running the Examples

You can run any file using Node.js:

```bash
node 31_arithmatic_operator.js
node 38_confusing_comparison.js
node 41_ternary_operator.js
```

---

> This chapter is part of the **Learn Playwright 2X** JavaScript fundamentals series.
