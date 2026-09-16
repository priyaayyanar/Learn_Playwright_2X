interface Executables {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executables {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log(`Running test case: ${this.name}`);
    }

    getStatus(): string {
        return "Pass";
    }
}

let tc: Executables = new TestCase("Verify Login Redirect");
tc.run();
console.log(`Status: ${tc.getStatus()}`);