abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    parentLoan(): void {
        console.log("parent loan");
    }
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
    loan(): void {
        console.log("My Father has loan. I have to settle it :D");
    }
    childLoan(): void {
        console.log("GIVE LOAN");

    }

    printTestName(): void {
        console.log("Test Name: " + this.testName);
    }
}

let test = new UITest("Login Test");
//console.log("Running test: " + test.testName);
test.printTestName();
test.setup();
test.execute();
test.teardown();
test.loan();
test.parentLoan();
test.childLoan();

