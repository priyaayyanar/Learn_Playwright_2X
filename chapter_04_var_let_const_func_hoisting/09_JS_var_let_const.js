var v = 10;
let l = 20;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // Redeclaration of var is allowed
browser = "Edge"; // Reassignment of var is allowed

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test case: " + testCases[i]);
}

console.log("Loop counter Leaked outside the loop: " + i);

