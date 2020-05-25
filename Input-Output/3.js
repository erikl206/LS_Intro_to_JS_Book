let rlSync = require('readline-sync');
let currentAge = rlSync.question('How old are you? ');
console.log(`You are ${currentAge} years old.`);
let age = function (years) {
  console.log(`In ${years} years, you will be ${years + currentAge} years old.`)
}

age(10);
age(20);
age(30);
age(40);