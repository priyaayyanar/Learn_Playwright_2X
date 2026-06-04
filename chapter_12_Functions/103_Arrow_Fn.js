// function expression
const greet = function (name) {
    return `Hi, ${name}!`;
}
let r = greet("Pri");
console.log(r);

// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return,
// remove the curly braces, and use the =>
const greet1 = name1 => console.log('Hi,', name1, '!');
greet1("Priya");

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const add = (a, b) => a + b;
console.log(add(1, 2));

const sayHi = () => console.log('Hi');
console.log(sayHi());

const greet2 = (name2) => {
    const msg = "Hi," + name2 + "!";
    return msg;
}

let r2 = greet2("Praneesh")
console.log(r2);