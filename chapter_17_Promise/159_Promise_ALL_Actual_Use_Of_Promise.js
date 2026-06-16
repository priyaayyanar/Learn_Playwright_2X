// Similarly like OR gate. If any condition fails then the entire execution will be failed

let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are Ok!");
});

// All tests should be passed. Like AND condition
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (error) {
    console.log('Failed', error);
});

// AllSelected -> Test Report. Accumulates all the test results and print it.
// Whether it has passed or not. It will print everything
Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

// This is like a test report
// you want results for ALL tests,
// not just stop at the first failure.