// Many ways to create an Array

//1 -> Prefered by using Array Literal
let browsers = ["Chrome", "Firefox", "Edge"];

//2 -> by creating constructor
let scores = new Array(3);
console.log(scores);
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
console.log(scores);

let scores2 = new Array(1, 2);
console.log(scores2);

/**
 * 1. new Array(1, 2) - When multiple arguments are passed,
 * they become the elements of the array. So it creates [1, 2].

2. new Array(3) - When a SINGLE numeric argument is passed,
it is interpreted as the length of the array to create, not as an element.
So it creates an array with length 3 but empty slots.

let arr = new Array(100); // Pre-allocate space for 100 items

The modern recommendation

Because of this confusion, most developers today use array literals [] instead:
let scores = [3];        // ✅ One element with value 3
let scores2 = [1, 2];    // ✅ Two elements
let empty = [];          // ✅ Empty array
Bottom line: new Array(3) doesn't put 3 at index 0 because
the single number is interpreted as the array's size, not its content.
 */

// 3rd way -> Array.of
let numbers = Array.of(100, 200, 300, 400, 500);
console.log(numbers); //[ 100, 200, 300, 400, 500 ]

let numbers1 = Array.of(100);
console.log(numbers1); // [ 100 ]

// 4th way -> Array.from
let chars = Array.from("hello");
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

let numbers2 = Array.from(1);
console.log(numbers2); // []