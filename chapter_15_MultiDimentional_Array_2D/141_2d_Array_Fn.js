let scores = [
    [85, 90, 78], // Student 1 = 253
    [60, 45, 70], // Student 2 = 175
    [95, 88, 92]  // Student 3 = 275
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

// I want all the test cases which have failed
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);

        }
    }
}

// Is the following a 2d array?
let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]

// Absolutely yes.
// It has multiple rows and column.
// But it is Asymetric in nature as rows and column are unqual