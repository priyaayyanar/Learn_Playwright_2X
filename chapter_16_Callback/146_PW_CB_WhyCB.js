// There is a hidden function called test under @playwright/test

// import { test } from '@playwright/test';

// If we use the above line then it has the following function inbuilt

function test(testName, callback) {
    console.log(testName);
    callback();
}

test("Verify Login Page is working", () => {
    // PW code here
});

// Synchronous -> Runs one by one. 2nd program will wait for the 1st one to finish
// Asynchronous -> I will complete my work and come to you with response,
//                 untill then you can carry on with your own work

