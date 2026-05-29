let tests = ['Login', 'Search', 'Add', 'Checkout'];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("------------");

// for..of (cleanest values)
for (test of tests) {
    console.log(test);
}

console.log("------------");

// Mainly Used 

// foreach
tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("------------");

// for...in (saves the index and returns it)
for (let test in tests) {
    console.log(test, tests[test]);
}

console.log("------------");

// Not Used much 

// for.. of
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}