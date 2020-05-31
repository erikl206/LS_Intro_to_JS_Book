let rlSync = require('readline-sync');
let currentAge = rlSync.question('How old are you? ');
console.log(`You are ${currentAge} years old.`);
let age = function (years) {
  console.log(`In ${years} years, you will be ${years + parseInt(currentAge)} years old.`)
}

for (let index = 10; index <= 100; index += 10) {
  age(index);
}