"use strict";
class BaseTest {
    setUp() {
        console.log("Open the browser.");
    }
    tearDown() {
        console.log("Close the browser.");
    }
}
class LoginTest extends BaseTest {
    setUp() {
        console.log("[LoginTest]Open the browser and navigate to the login page.");
        console.log("[LoginTest] Maximize");
    }
    constructor() {
        super();
        this.tearDown();
    }
}
class APITest extends BaseTest {
    setUp() {
        console.log("[APITest]Open the browser and navigate to the API test page.");
        console.log("[APITest] Maximize");
    }
    constructor() {
        super();
        this.tearDown();
    }
}
let test = new LoginTest();
test.setUp();
let apiTest = new APITest();
apiTest.setUp();
