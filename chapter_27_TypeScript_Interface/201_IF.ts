interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login Test",
    status: "Passed",
    duration: 1500
};

console.log("Test Case : ID - " + test1.id + " | Name - " + test1.name + " | Status - " + test1.status + " | Duration - " + test1.duration + "ms");

let test2: TestCase = {
    id: 2,
    name: "LogoutTest",
    status: "Failed",
    duration: 2000
};

console.log("Test Case : ID - " + test2.id + " | Name - " + test2.name + " | Status - " + test2.status + " | Duration - " + test2.duration + "ms");