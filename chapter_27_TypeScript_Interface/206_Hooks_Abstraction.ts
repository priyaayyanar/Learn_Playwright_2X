interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[Before Each] Setting up test environment for: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[After Each] Cleaning up test environment for: " + testName);
}

interface TestCase {
    id: string;
    name: string;
    status: string;
    duration: number;
}

beforeEachHook("Login Test");

let test1: TestCase = {
    id: "TC001",
    name: "Login Test",
    status: "Passed",
    duration: 1500
};

console.log("Test Case : ID - " + test1.id + " | Name - " + test1.name + " | status - " + test1.status + " | Duration - " + test1.duration);
afterEachHook("TearDown - Login Test")