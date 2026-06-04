let fruits = ["Banana", "Apple", "Grapes"];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort();
console.log(number);

let nums = [1, 2, 10, 22, 8];
nums.sort();
console.log(nums); // -> [ 1, 10, 2, 22, 8 ]
// Natural Sorting. Lexicographic Sorting
// JS considers numbers as strings and sort from the first letter(digit)

// If we want to do the proper sorting, then we have to use the arrow function
nums.sort((a, b) => a - b); // Ascending order
console.log(nums);

nums.sort((a, b) => b - a); // Decending order
console.log(nums);