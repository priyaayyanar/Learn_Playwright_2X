let a = [1, 2, 3, 4]; // one dimentional Array

let grid_2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// [0,0] -> 1, [1,0] -> 4

// print all the elements
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(grid_2D[i][j]);
    }
    console.log('\n');
}

