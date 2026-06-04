let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);

// Spread modern way to concatenation 
// ...a -> all the elements of a
// ...b -> all the elements of b
let d = [...a, ...b];
console.log(d);

let result = ["pass", "fail", "skip"].join(" | ");
console.log(result);