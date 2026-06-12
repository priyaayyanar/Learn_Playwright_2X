// n = 3
// *
// * *
// * * *

let n = 3;

for (i = 0; i < n; i++) {
    row = " ";
    for (j = 0; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}