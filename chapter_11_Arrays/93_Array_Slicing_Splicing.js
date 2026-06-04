let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3)); // 2,3
// slice(starting index, end index n-1)
console.log(arr.slice(2, 5)); // 3,4,5

console.log(arr.slice(2)); // 3,4,5

console.log(arr.slice(-2));
// starting index, no end index.
// Then it will log all the remaining items on the right hand side of the array

console.log(arr.slice(0)); // logs all the items 

let arr1 = [10, 20, 30, 40, 50];

let splice = arr1.splice(1, 3); // this may modify the entire array

console.log(arr1); // [10,50]
console.log(splice); // [20,30,40]