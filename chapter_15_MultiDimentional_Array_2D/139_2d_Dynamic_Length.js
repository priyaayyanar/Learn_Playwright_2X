let matrix_1D = [
    [1, 2, 3, 4],
];

// R -> 1
// c -> 4
// 1*4

// Grid is nothing but the array has same length of Rows and Columns

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(grid[0][0]); // 10
console.log(grid[0][2]); //30

console.log(grid.length); // -> always refers to the length of ROW
console.log(grid[0].length); // -> Lenght of a row is always the length of the column

if (grid.length === grid[0].length) {
    console.log('2 Dimentioal Array');
}