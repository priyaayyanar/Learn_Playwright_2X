function runTest(name, status, duration) {
    return `${name}: ${status} (${duration})`;
    console.log("Inside function");
}
//runTest("Login", "pass", 320);
const r = runTest("Login", "pass", 320);
console.log(r);

