let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// 1, 4, 3
// array 2 references array 1, line 3 doesn't reassign the array, just the element in it