// var function scoped, can be re-declared and updated, hoisted to the top of their scope and initialized with undefined
var a = 10; //Global scope
console.log("Starting value of 'a' in global scope: " + a);

// var is funtion scoped

function printHello() {
    console.log("Hello, Cool Bangalore! Inside function");
    var a = 20; // Local scope
    console.log("Value of 'a' inside function: " + a);
    if (true) {
        var a = 30; // Still in the function scope, not block scoped
        console.log("Value of 'a' inside 'if' block: " + a);
    }
}

printHello();

var a = 50;
console.log("Value of 'a' in global scope after function call  : " + a);
