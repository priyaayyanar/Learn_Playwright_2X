let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
]

// How many test cases we have executed ? -> 3
// How many test cases are passed -> 2
// What is the status code you have got for the failed test case? -> 404

// There are 3 ways to print the Matrix items

// 1st Way -> it will print the items one by one in a separate line
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
    console.log();
}

// 2nd way -> This one is very organized as it will print only the row items in a separate line
for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log();
}

console.log();

// 3rd Way -> similar like 2nd way. BUt using forwach and arrow functions
// Not recommended but AI will generate code basis of this sysntax
// foreach
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});