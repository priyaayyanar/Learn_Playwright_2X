let config = {};

config.browser = 'chrome';
config.timeout = 3000;
config.testName = "login test"

console.log(config);

delete config.browser;
console.log(config);

if (config.browser === "chrome") {
    console.log('I will execute my testcase');
} else {
    console.log('I will not execute testcase');
}

let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
}; // different object and different way to create its key and value pair