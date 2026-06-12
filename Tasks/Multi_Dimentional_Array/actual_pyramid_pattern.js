// Question 2

//   *

//  ***

// *****

// i -> for row loop
// j -> for space loop before printing the *
// k -> for printing * in odd counts (1, 3, 5)

let row = 3;

for (i = 1; i <= row; i++) {
    let rowStr = "";
    for (j = 1; j <= row - i; j++) {
        rowStr += " ";
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        rowStr += "*";
    }
    console.log(rowStr);
    console.log();
}