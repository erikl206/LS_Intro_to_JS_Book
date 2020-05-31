let numbers = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + (element * element), 0)
}

console.log(sumOfSquares(numbers));

//without the accumulator value it would return 77