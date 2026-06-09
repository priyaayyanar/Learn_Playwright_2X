/** (Big)Fish eating a (Small)Fish
 * Function passes another function as a parameter
 * A function that takes a function as argument or returns a function.
 * */

function runWithLogin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginFailedTest() {
    return "Fail"
}

let pass_result = runWithLogin(loginTest, "Login Test");
console.log(pass_result);
let fail_result = runWithLogin(loginFailedTest, "Dashboard Failed Test");
console.log(fail_result);
