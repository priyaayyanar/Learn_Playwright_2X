class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}
class APITest extends BaseTest {

    setup() {
        super.setup(); // APITest will help you to call your parent function. super() - Constrcutor, super.fname() - functions name
        console.log("APITest: open browser");
    }
}
let test = new APITest(); //  whoever object is present, it will call that. 
test.setup();