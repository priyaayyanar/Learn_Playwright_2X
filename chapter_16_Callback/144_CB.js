function test(testCase, assertion) {
    console.log(testCase);
    console.log('Executing testcase');
    assertion();
}

test("TestCase1", () => {
    console.log('Assertion Part done');
});



