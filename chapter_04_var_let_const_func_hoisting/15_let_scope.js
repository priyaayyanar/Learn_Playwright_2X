let a = 10;
console.log("Starting value of 'a' in global scope: " + a);

function printHello() {
    console.log("Hello, Cool Bangalore! Inside function");
    let a = 20; // Local scope
    console.log("Value of 'a' inside function: " + a);
    if (true) {
        let a = 30; // Block scoped
        console.log("Value of 'a' inside 'if' block: " + a);
    }
    console.log("Value of 'a' after 'if' block: " + a);
}

printHello();

console.log("Value of 'a' in global scope after function call  : " + a);