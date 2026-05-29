let scores = [35, 78, 89, 69, 99];

// map -> transform every element and returns new Array
// map will always returns the same number of elements which we have already
// but based on the condition, the values will be changed
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

// filter -> Keeps the elements that pass the condition
let passed = scores.filter(s => s > 70);
console.log(passed);

// reduce -> reduce the array size into single by accumulating the values
// a -> accumulated value, 
// b -> current value, 
// 0 -> Initial value
let reduced = scores.reduce((a, b) => a + b, 0);
console.log(reduced);

// flat -> flattens nested array into a single array
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());