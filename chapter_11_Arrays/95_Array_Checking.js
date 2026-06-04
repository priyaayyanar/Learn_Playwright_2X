// Check the given input is an array

let a = [1, 2];
let b = "a";

console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Every & Some
console.log([80, 89, 98].every(s => s >= 70));
console.log([80, 60, 70].every(s => s >= 70));
console.log([71, 65, 68].some(s => s >= 70));

// s => s>=70
// s -> argument
// => inside function definition
// s >= 70 -> condition