// Primitive vs Reference Type

// Primitive Type
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
// The value of a wont changed by external assignments

// Reference Type
// objects copied by reference - call by ref
// reference - Array, Object, function
let obj1 = { age: 30 };
let obj2 = obj1;
obj2.age = 40;
console.log(obj1.age);
console.log(obj2.age);