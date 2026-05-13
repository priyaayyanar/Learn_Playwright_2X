// Hoisting means, if the var declaration is moved to the top of the function or global scope, it will be hoisted as undefined.
//Done by JIT Compiler.

console.log(greeting)

var greeting = "Hello, Pri!";
console.log(greeting)

/*O/P
undefined  //Hoisting happens, so var declaration is moved to the top and initialized with undefined.   
Hello, Pri!
*/