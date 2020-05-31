let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLenths(array) {
  lengths = array.map(string => string.length);
  return lengths.filter (num => (num % 2 !== 0))
}

console.log(oddLenths(arr))