// Scope in functions

let env = "staging"; // global scope

function setUpConfig() {
    let timeOut = 3000;
    console.log(env); // -> staging
    console.log(timeOut); // -> 3000
}

setUpConfig();
console.log(env); // -> staging
console.log(timeOut); // ReferenceError: timeOut is not defined

