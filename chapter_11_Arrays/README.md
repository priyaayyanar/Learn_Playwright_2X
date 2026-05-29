# Chapter 11: Arrays

This folder contains hands-on examples covering JavaScript arrays — creation, access, modification, searching, iteration, and transformation methods.

---

## File Index

| # | File | Topic | Description |
|---|------|-------|-------------|
| 1 | `83_Arrays.js` | Array Basics | Introduction to arrays: empty arrays, indexed access, mixed types, and `undefined` out-of-bounds access |
| 2 | `84_Arrays.js` | Creating Arrays | Four ways to create arrays: array literals, `new Array()`, `Array.of()`, and `Array.from()` |
| 3 | `85_Access_Array.js` | Access & Modify | Accessing elements by index, using `.at()` for negative indexing, and modifying array values |
| 4 | `86_Arrays_Add_Remove.js` | Add & Remove | `push()`, `pop()`, `unshift()`, and `shift()` for adding and removing elements from either end |
| 5 | `87_Splice_Add_Remove.js` | Splice Method | Using `splice()` to delete, insert, and replace elements at specific positions |
| 6 | `88_REAL_Example.js` | Real-World Example | Looping through a browser list, removing items, and checking for unsupported browsers |
| 7 | `89_Searching.js` | Searching Arrays | `indexOf()`, `lastIndexOf()`, `includes()`, `find()`, `findIndex()`, `findLast()`, and `findLastIndex()` |
| 8 | `90_Iterate.js` | Iteration | Four ways to iterate: `for` loop, `for...of`, `forEach()`, `for...in`, and `entries()` with `for...of` |
| 9 | `91_Transform_Array.js` | Transform Methods | `map()`, `filter()`, `reduce()`, and `flat()` for transforming and flattening arrays |

---

## Topics Covered

### 1. Creating Arrays
- Array literals: `let arr = [1, 2, 3]`
- `new Array()` constructor (caution with single numeric argument)
- `Array.of()` for creating arrays with given elements
- `Array.from()` for creating arrays from iterable objects

### 2. Accessing & Modifying Arrays
- Zero-based indexing: `arr[0]`, `arr[1]`
- Negative indexing with `.at(-1)` for the last element
- Modifying elements directly: `arr[index] = newValue`
- Accessing out-of-bounds returns `undefined`

### 3. Adding & Removing Elements
| Method | Action | End |
|--------|--------|-----|
| `push()` | Add element(s) | End |
| `pop()` | Remove last element | End |
| `unshift()` | Add element(s) | Beginning |
| `shift()` | Remove first element | Beginning |
| `splice()` | Add / remove / replace | Any position |

### 4. Searching Arrays
| Method | Returns |
|--------|---------|
| `indexOf(value)` | First index of value, or `-1` |
| `lastIndexOf(value)` | Last index of value, or `-1` |
| `includes(value)` | `true` / `false` |
| `find(fn)` | First matching element |
| `findIndex(fn)` | First matching element's index |
| `findLast(fn)` | Last matching element |
| `findLastIndex(fn)` | Last matching element's index |

### 5. Iterating Arrays
- `for` loop with `arr.length`
- `for...of` — cleanest way to get values
- `forEach()` — most commonly used, provides value and index
- `for...in` — iterates over indices (not recommended for arrays)
- `entries()` with `for...of` — get both index and value

### 6. Transforming Arrays
| Method | Purpose | Returns |
|--------|---------|---------|
| `map(fn)` | Transform every element | New array (same length) |
| `filter(fn)` | Keep elements matching condition | New array (shorter or equal) |
| `reduce(fn, initial)` | Accumulate to a single value | Single value |
| `flat()` | Flatten nested arrays | New flat array |

---

## Key Takeaways

| Rule | Recommendation |
|------|----------------|
| Prefer | Array literals `[]` over `new Array()` |
| Use `.at(-1)` | To access the last element cleanly |
| Use `push` / `pop` | For stack behavior (end operations) |
| Use `unshift` / `shift` | For queue behavior (beginning operations) |
| Use `splice` | When you need to add, remove, or replace at a specific index |
| Use `forEach` | For simple iteration with index access |
| Use `for...of` | When you only need values |
| Use `map` | To transform data without mutating the original |
| Use `filter` | To extract a subset matching a condition |
| Use `reduce` | To aggregate values into a single result |

---

## Running the Examples

You can run any file using Node.js:

```bash
node 83_Arrays.js
node 88_REAL_Example.js
node 91_Transform_Array.js
```

---

> This chapter is part of the **Learn Playwright 2X** JavaScript fundamentals series.
