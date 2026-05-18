// can you please tell me the different between the null vs undefined in JS with explain simple, 
//please createa 23_null_undeifned.js in the chatper_05_literal



// ==========================================
// Null vs Undefined in JavaScript
// ==========================================

/*
  SIMPLE EXPLANATION:
  -------------------
  Both `null` and `undefined` represent "empty" or "no value", but they mean different things.

  UNDEFINED:
  ----------
  - Means: "I don't exist yet" or "I haven't been given a value"
  - It is automatically assigned by JavaScript.
  - A variable that is declared but not assigned a value is `undefined`.
  - A function that does not return anything returns `undefined`.

  NULL:
  -----
  - Means: "I exist, but I am intentionally empty"
  - It must be assigned by the programmer manually.
  - It is used when you want to say "this variable has no value on purpose".

  KEY DIFFERENCES:
  ----------------
  | Feature        | undefined                  | null                          |
  |----------------|----------------------------|-------------------------------|
  | Meaning        | Not assigned yet           | Intentionally empty           |
  | Who sets it    | JavaScript (automatic)     | Programmer (manual)           |
  | Type (typeof)  | "undefined"                | "object" (this is a JS bug!)  |
  | Use case       | Missing value              | Explicitly no value           |
*/

// ==========================================
// EXAMPLES
// ==========================================

// 1. UNDEFINED - variable declared but not assigned
let userName;
console.log("userName:", userName);        // undefined
console.log("typeof userName:", typeof userName); // "undefined"

// 2. UNDEFINED - accessing a non-existent property
let person = { name: "Priya" };
console.log("person.age:", person.age);    // undefined (age property doesn't exist)

// 3. UNDEFINED - function with no return
function greet() {
  console.log("Hello!");
}
let result = greet();
console.log("result:", result);            // undefined

// 4. NULL - intentionally empty
let profilePic = null;
console.log("profilePic:", profilePic);    // null
console.log("typeof profilePic:", typeof profilePic); // "object" (JS bug!)

// 5. NULL - reset a variable intentionally
let cartItems = ["apple", "banana"];
cartItems = null;  // user cleared the cart
console.log("cartItems:", cartItems);      // null

// ==========================================
// IMPORTANT COMPARISONS
// ==========================================

console.log("\n--- Comparisons ---");

// Loose equality (==) - JavaScript says they are equal
console.log("null == undefined:", null == undefined);   // true

// Strict equality (===) - they are NOT the same type
console.log("null === undefined:", null === undefined); // false

console.log("typeof undefined:", typeof undefined);     // "undefined"
console.log("typeof null:", typeof null);               // "object" (known JS bug)

// ==========================================
// QUICK SUMMARY
// ==========================================

/*
  UNDEFINED = "I don't have a value yet" (JavaScript's default)
  NULL      = "I have no value on purpose" (Programmer's choice)

  Use `undefined` when:
    - A variable is not initialized
    - A function doesn't return anything
    - A property doesn't exist in an object

  Use `null` when:
    - You want to explicitly say "nothing here"
    - You want to reset/clear a variable intentionally
    - You want to indicate an object reference is empty
*/
