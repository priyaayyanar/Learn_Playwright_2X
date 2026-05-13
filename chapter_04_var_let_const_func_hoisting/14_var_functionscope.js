var a = 10;
console.log("Starting value of 'a' in global scope: " + a);

function printHello() {
    console.log("Hello, Cool Bangalore! Inside function");
    var a = 20; // Local scope
    console.log("Value of 'a' inside function: " + a);
    if (true) {
        var a = 30; // Still in the function scope, not block scoped
        console.log("Value of 'a' inside 'if' block: " + a);
    }
    console.log("Value of 'a' after 'if' block: " + a);
}

printHello();

console.log("Value of 'a' in global scope after function call  : " + a);