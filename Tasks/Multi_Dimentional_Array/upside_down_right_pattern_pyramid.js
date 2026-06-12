// *****

// ****

// ***

// **

// *

// Print reverse

let n = 5;

for (i = 0; i < n; i++) {
    let row = " ";
    for (j = n - 1; j >= i; j--) {
        row += "* ";
    }
    console.log(row);
}

