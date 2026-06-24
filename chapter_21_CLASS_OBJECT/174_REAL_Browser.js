class TestCase {
    constructor(tc_name, tc_status, tc_priority) {
        this.tc_name = tc_name;
        this.tc_status = tc_status;
        this.tc_priority = tc_priority;
    }
    display() {
        console.log('Test Case Name : ', this.tc_name, ' | Test Case Status : ', this.tc_status, ' | Test Case Priority : ', this.tc_priority);
    }
}

// function -> idealy called as "Calling Function"
function f1() {

}

let login_tc = new TestCase("Login Test Case", "Pass", "High");
let signUp_tc = new TestCase("Sign Up Test Case", "Fail", "Low");

login_tc.display();
signUp_tc.display();

// Function vs Method
// Function -> outside the class
// Method -> inside the class
// method is a function but inside the class :)
