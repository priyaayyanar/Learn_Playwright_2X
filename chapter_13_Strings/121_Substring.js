let str = "Login_Test_Pass_001";

// slice -> slice the item as per the index mentioned.
// -ve indexes supported

console.log(str.slice(0, 5)); // Login
// -> starts from INdex 0 and from 0th Index, get the mentioned legnth of items.
console.log(str.slice(11)); // Pass_001
// -> slice the index from 11, and take all the remaining
// as the second segment is not mentioned

let test_number = str.slice(-3);
// -> slice from the -3 index and prints the remaining Items
console.log(test_number); // 001

console.log(str.includes("Pass")); // true

console.log(str.substring(6, 10));
// starts from index 6 and prints the item upto the length mentioned in 2nd segment

console.log(str.at(0));


