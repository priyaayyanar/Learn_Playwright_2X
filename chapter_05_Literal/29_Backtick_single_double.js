// Backtick (`), Single ('), and Double (") Quotes in JavaScript

/*
  SINGLE ('') and DOUBLE ("") QUOTES:
  - Both are exactly the same in JavaScript.
  - Use them for simple text strings.
  - Cannot include variables or expressions directly.
  - Cannot span multiple lines.

  BACKTICK (``) (Template Literals):
  - Allows embedding variables/expressions using ${...}.
  - Allows multi-line strings without special characters.
  - More powerful and modern way to write strings.
*/

let name = "Priya";
let age = 37;

// Single and Double quotes — same thing, no expression support
let single = 'Hello, ' + name + '! You are ' + age + ' years old.';
let double = "Hello, " + name + "! You are " + age + " years old.";

// Backtick — supports expressions and multi-line
let backtick = `Hello, ${name}! You are ${age} years old.`;

console.log("Single :", single);
console.log("Double :", double);
console.log("Backtick:", backtick);

// Multi-line example (only works with backticks)
let multiLine = `Line 1
Line 2
Line 3`;

console.log("\nMulti-line with backtick:");
console.log(multiLine);

// Expression inside backtick
console.log("\nExpression:", `Next year, I will be ${age + 1}.`);
