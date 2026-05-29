let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// splice(start index, index-count to be deleted, items to add) 
arr.splice(1, 2); // starting from Index 1, delete count 2
console.log(arr); // 1,4,5,6 (2& 3 have been deleted)

// to add an item alonf with delete the old
arr.splice(2, 0, 99); // start from index 2, don't delete anything and add 99 in that same index
console.log(arr);

// Replace 
arr.splice(2, 1, 88);
console.log(arr);

// Replace Multiple item from a specified index
arr.splice(1, 2, 2, 3, 4);
console.log(arr);
