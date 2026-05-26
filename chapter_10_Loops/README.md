# Chapter 10: Loops

This folder contains hands-on examples covering JavaScript loop constructs — `for`, `while`, and `do...while` — along with practical use cases and interview-style questions (IQ).

---

## File Index

| # | File | Topic | Description |
|---|------|-------|-------------|
| 1 | `71_For_loop.js` | Basic `for` Loop | Introduction to loop syntax; replaces repetitive `console.log` statements |
| 2 | `72_For_loop.js` | `for` Loop Counter | Displays the loop index during each iteration |
| 3 | `73_For_Loop2.js` | `for` Loop Variations | Using different variable names and inclusive ranges (`<=`) |
| 4 | `74_IQ.js` | `for` Loop IQ | Loop that never runs, infinite loop warning, conditional logic inside a loop |
| 5 | `75_For_OF_IN_EACH.js` | Loop Placeholder | Placeholder for `for...of` and `for...in` (to be covered with arrays) |
| 6 | `76_While.js` | `while` Loop | Basic `while` loop; counting attempts and age validation example |
| 7 | `77_Do_While.js` | `do...while` Basics | Runs at least once even when the condition is initially `false` |
| 8 | `78_Do_While.js` | `do...while` Retry | Real-world retry logic using `do...while` |
| 9 | `79_IQ.js` | `while` Loop IQ | Countdown `while` loop using decrement |
| 10 | `80_IQ.js` | `do...while` IQ | Execution flow with post-decrement inside a `do...while` |
| 11 | `81_IQ.js` | `continue` Statement | Skipping an iteration using `continue` in a `for` loop |
| 12 | `82_IQ.js` | `while` vs `do...while` | Comparison when the initial condition is `false` |

---

## Topics Covered

### 1. `for` Loop
- Syntax: `for (initialization; condition; increment/decrement)`
- Repeats a block of code a known number of times
- Variable scope inside the loop block
- Inclusive vs exclusive ranges (`<` vs `<=`)

### 2. `while` Loop
- Syntax: `while (condition) { ... }`
- Repeats while the condition remains `true`
- Best used when the number of iterations is unknown upfront
- Common pattern: initialize → check → execute → update

### 3. `do...while` Loop
- Syntax: `do { ... } while (condition)`
- Guarantees the block runs **at least once** before checking the condition
- Useful for retry logic and menu-driven programs

### 4. Loop Control — `continue`
- Skips the current iteration and jumps to the next one
- Example: skipping a specific value inside a `for` loop

### 5. Interview Questions & Edge Cases
- What happens when the loop condition is never `true`?
- Infinite loops: forgetting the condition or increment
- Using `if/else` inside loops
- Difference between `while` and `do...while` when the condition starts `false`
- Post-decrement vs pre-decrement in loop contexts

---

## Key Takeaways

| Rule | Recommendation |
|------|----------------|
| Use `for` | When the number of iterations is known |
| Use `while` | When the number of iterations is unknown |
| Use `do...while` | When the block must execute at least once |
| Avoid | Infinite loops by always ensuring the condition can become `false` |
| Remember | `continue` skips the rest of the current iteration |
| Be careful | Loop variable declared with `let` is block-scoped; `var` is function-scoped |

---

## Running the Examples

You can run any file using Node.js:

```bash
node 71_For_loop.js
node 76_While.js
node 77_Do_While.js
```

---

## Practice Tasks

The `Tasks/` subfolder contains hands-on exercises to reinforce loop concepts:

| # | File | Task | Description |
|---|------|------|-------------|
| 1 | `Tasks/Fizz_Buzz.js` | FizzBuzz | Classic programming challenge using loops and conditionals to print numbers 1-100 with "Fizz", "Buzz", and "FizzBuzz" replacements |
| 2 | `Tasks/triangle.js` | Triangle Classifier | Uses if-else logic to classify a triangle as equilateral, isosceles, or scalene based on side lengths |

---

> This chapter is part of the **Learn Playwright 2X** JavaScript fundamentals series.
