async function sayHello() {
    return "Hello, QA!";
}

sayHello().then(function (msg) {
    console.log(msg);
});
console.log('----------------------------------');

async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);
}

getStatus();

console.log('----------------------------------');

async function testFlow() {
    let step1 = await Promise.resolve("Browser Opened");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked Login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);

}

testFlow();

/**
 * O/P
 * ----------------------------------
----------------------------------
Hello, QA!
Status code: 200
Browser Opened
Clicked Login
Verified Dashboard
 */