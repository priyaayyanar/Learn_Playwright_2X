function runTest(name, status, duration) {
    console.log("Inside function before return statement");
    return `${name}: ${status} (${duration})`;
    console.log("Inside function after return statement");
    // once the return statement is executed, the function will get exited 
    // so the log "Inside function after return statement" won't be printed
}
runTest("Login", "pass", 320);
//const r = runTest("Login", "pass", 320);
//console.log(r);
// if we want to run the above function properly,
// then we have to receive the return value by using some variable
// and log that variable to print the value of the function
