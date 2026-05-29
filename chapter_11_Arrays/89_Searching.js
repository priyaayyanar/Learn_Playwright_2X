let results = ['pass', 'fail', 'error', 'pass']

// indexof() -> return the first index the element occurs
// and returns -1 if the element is not present
console.log(results.indexOf("pass"));// 0
console.log(results.indexOf("skip"));//-1

//lastindexOf() -> returns the last occurance of the item in an array
console.log(results.lastIndexOf("pass"));

// includes -> returns boolean
// -> true if the element exists
// -> false if the element doesn't exist
console.log(results.includes("pass"));
console.log(results.includes("skip"));

// find -> returns first matching element
let num = [10, 20, 30, 40];
console.log(num.find(x => x > 20));

// findIndex -> returns the first element Index where the condition is matching
console.log(num.findIndex(n => n > 10));

// findLast -> returns the last element in the array where the condition is matching
console.log(num.findLast(n => n > 10));

// findLastIndex -> returns the last element index in the array where the condition is true
console.log(num.findLastIndex(n => n > 10));