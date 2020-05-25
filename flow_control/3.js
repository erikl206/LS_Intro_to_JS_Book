let evenOrOdd = function(int) {
  if (Number.isInteger(int) === false) {
    console.log('error');
    return;
  }
  
  if (int % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}