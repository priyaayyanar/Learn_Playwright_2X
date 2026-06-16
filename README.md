# Learn Playwright 2X

This repository contains learning materials and practice code for JavaScript fundamentals and Playwright automation.

## Structure

| Folder | Content |
|---|---|
| `chapter_01_basics` | JavaScript basics: console, loops, functions, Node.js process info |
| `chapter_02_JS_Concepts` | JavaScript concepts and fundamentals |
| `chapter_03_Literals_Identifiers` | Identifiers, literals, comments, naming conventions, VS Code shortcuts |
| `chapter_04_var_let_const_func_hoisting` | var, let, const, functions, hoisting, scope |
| `chapter_05_Literal` | Literals: number, string, template literals, null, undefined, backtick vs quotes |
| `chapter_06_operators` | Operators: arithmetic, assignment, comparison, logical, ternary, type, nullish coalescing |
| `chapter_07_If_else` | Conditional statements: if, else if, else, nested if, truthy/falsy, real-world scenarios, and practice tasks |
| `chapter_08_Switch_Statement` | Switch statements: cases, break, default, grouped cases, real-time examples, and interview questions |
| `chapter_09_UserInput_Runs_On_Browser` | User input handling: browser prompts, Node.js readline, and prompt-sync module |
| `chapter_10_Loops` | JavaScript loops: `for`, `while`, `do...while`, `continue`, and interview questions |
| `chapter_11_Arrays` | JavaScript arrays: creation, access, modification, searching, iteration, transformation, slicing, splicing, concatenation, and checking |
| `chapter_12_Functions` | Functions: basic functions, parameter and return types, template literals, function expressions, arrow functions, IIFE, default parameters, rest parameters, spread operator, scope, nested functions, closures, higher-order functions, and interview questions |
| `chapter_13_Strings` | Strings: properties, searching, substrings, transformation, and conversion |
| `chapter_14_Objects` | Objects: creation, key-value pairs, property access, methods, destructuring, spread, getters/setters, `Object.keys`/`values`/`entries`, `for...in`, `let` vs `const` with objects, reference vs primitive types, real-world config objects |
| `chapter_15_MultiDimentional_Array_2D` | Multi-dimensional arrays: 2D arrays, matrix traversal, dynamic row/column length, real-world test matrices, pattern problems |
| `chapter_16_Callback` | Callbacks: introduction, anonymous/arrow callbacks, real-time examples, Playwright `test` callback, synchronous vs asynchronous, callback hell / pyramid of doom, callbacks with parameters and return values |
| `chapter_17_Promise` | Promises: creation, resolve/reject, `.then()`, `.catch()`, `.finally()`, promise chaining, callback-to-promise transformation, `Promise.all`, `Promise.allSettled`, and interview questions |
| `chapter_19_Playwright_Basics` | Playwright basics: installation, browser automation fundamentals |
| `LiveTest` | Live coding challenges and practice tests |
| `Tasks` | Practice tasks: Loops (Fizz Buzz, triangle), String (Anagram, Palindrome), and Multi-Dimensional Array (pyramid patterns) |

## Topics Covered

- JavaScript basics (variables, loops, functions)
- Node.js commands (platform, architecture, version)
- JavaScript identifier rules and naming conventions
- Identifier cases: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, Train-Case, dot.case, Hungarian notation
- JavaScript comments
- VS Code keyboard shortcuts (Windows & Mac)
- `var`, `let`, `const` differences and best practices
- Function declarations and expressions
- Hoisting: var, let, const, and functions
- Scope: global, function, and block scope
- JavaScript literals: numbers, strings, booleans, null, undefined
- Template literals and string interpolation
- Backtick (`) vs single (`'`) vs double (`"`) quotes
- `null` vs `undefined`
- Arithmetic, assignment, comparison, and logical operators
- Strict (`===`) vs loose (`==`) equality
- Ternary operator
- Type operator (`typeof`)
- Nullish coalescing operator (`??`)
- Increment and decrement operators
- If / else if / else conditional statements
- Truthy and falsy values in conditions
- Role-based access control with nested if statements
- Real-world conditional logic (login, API status, grading systems)
- Switch statements and case matching
- Break and default in switch statements
- Grouped cases in switch
- Real-world switch examples (traffic signals, menu systems)
- Switch interview questions and tricky cases
- User input in browser (prompt, alert)
- User input in Node.js (readline, prompt-sync)
- `for`, `while`, and `do...while` loops
- Loop control with `continue`
- Infinite loop prevention and edge cases
- JavaScript arrays: literals, `new Array()`, `Array.of()`, `Array.from()`
- Array indexing and `.at()` for negative indexing
- Adding and removing elements: `push`, `pop`, `unshift`, `shift`, `splice`
- Searching arrays: `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`
- Iterating arrays: `for`, `for...of`, `forEach`, `for...in`, `entries()`
- Transforming arrays: `map`, `filter`, `reduce`, `flat`
- Array sorting: `sort` and custom comparators
- Array slicing: `slice` and shallow copy techniques
- Rest parameters (`...args`) in functions
- Arrow functions with real-world examples (status code validation)
- IIFE (Immediately Invoked Function Expressions)
- Default parameters in functions
- Function return statement execution flow
- Spread operator (`...`) with function arguments
- Function scope and nested functions
- Block scope and nested scope
- Closures: basic pattern, counter example, and real-world API retry tracker
- Higher-order functions (functions that take or return functions)
- Important concepts: Callback, Async, Await
- JavaScript strings: single, double, and backtick quotes
- String properties: `length`, character access (`charAt`, `at`, bracket notation)
- Searching and checking strings: `indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`, `search`, `match`, `matchAll`
- Substring methods: `slice`, `substring`, `substr`
- String transformation: `toUpperCase`, `toLowerCase`, `trim`, `replace`, `split`, `concat`, `padStart`, `padEnd`, `repeat`
- String conversion and encoding methods
- JavaScript String Cheatsheet reference
- JavaScript objects: creation, key-value pairs, dot and bracket notation
- Object properties: adding, modifying, deleting
- Reference vs primitive types in JavaScript
- Object reference equality and heap memory behavior
- Real-world object usage (config objects, test configurations)
- Object methods and the `this` keyword
- Object destructuring: basic, rename variables, default values, nested objects
- Object spread operator (`...`) for cloning and merging
- Getter and setter methods in objects
- Object utility methods: `Object.keys`, `Object.values`, `Object.entries`
- `for...in` loop for iterating over object properties
- `let` vs `const` with objects (mutable properties vs immutable reference)
- Dynamic property access with bracket notation
- Object property descriptors (`Object.getOwnPropertyDescriptor`)
- Multi-dimensional arrays (2D arrays)
- Matrix traversal with nested loops
- Dynamic row and column length in 2D arrays
- Real-world 2D array examples (test suites, score matrices)
- Pattern problems using nested loops (pyramid patterns)
- Callbacks: introduction and examples
- Normal functions, anonymous functions, and arrow functions as callbacks
- Real-time callback examples (test framework, cafe scenario)
- Playwright `test` function and callback pattern
- `setTimeout` for simulating asynchronous behavior
- Synchronous callbacks (`forEach`)
- Asynchronous callbacks and execution order
- Callback Hell / Pyramid of Doom
- 24-step end-to-end callback hell example (E2E checkout flow)
- Callbacks with parameters and return values
- Promises: creating with `new Promise`, `resolve`, and `reject`
- Promise `.then()` for handling successful resolution
- Promise `.catch()` for handling rejection/errors
- Promise `.finally()` for cleanup regardless of outcome
- Promise chaining: sequential async steps (open browser → login → enter credentials → click login)
- Transforming callback hell into clean promise chains
- `Promise.all`: running multiple promises in parallel (all must pass)
- `Promise.allSettled`: getting results for all promises regardless of pass/fail
- Promise interview questions and tricky cases
- Playwright basics: installation and setup
- Practice tasks: Fizz Buzz, triangle patterns, anagram check, palindrome check

## How to Run

```bash
node <filename>.js
```

## Author

Priya Ayyanar
