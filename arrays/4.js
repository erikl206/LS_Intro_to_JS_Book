let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evens = [];
let odds = [];

myArray.forEach(function (num) {
  if (num % 2 === 0) {
    evens.push(num)
  } else if (num % 2 !== 0) {
    odds.push(num)
  } else {
    console.log('not a valid integer')
  }
});

console.log(evens);
console.log(odds);