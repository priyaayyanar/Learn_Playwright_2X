function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser Opened!");
    });
}

function gotoLogin() {
    return new Promise(function (resolve) {
        resolve("Login Page Loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials Entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged In Successfully");
    });
}

// Pyramid of DOM with Promise .then function
// openBrowser()
//     .then(function (msg) {
//         console.log("Step 1", msg);
//         return goToLogin();
//     }).then(function (msg) {
//         console.log("Step 2 :", msg);
//         return enterCredentials();
//     }).then(function (msg) {
//         console.log("Step 3 :", msg);
//         return clickLogin();
//     }).then(function (msg) {
//         console.log("Step 4 :", msg);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     }).finally(function () {
//         console.log("Done execution!");
//     });

async function runE2E() {
    let msg1 = await openBrowser();
    console.log('Step 1: ', msg1);

    let msg2 = await gotoLogin();
    console.log('Step 2: ', msg2);

    let msg3 = await enterCredentials();
    console.log('Step 3: ', msg3);

    let msg4 = await clickLogin();
    console.log('Step 4: ', msg4);
}

runE2E();