let listA = [1, 6, 3, 2]
let listB = [-1, -6, -3, -2]
let listC = [2, 2]

function largest(list) {
  let greatest = list[0];
  list.forEach(element => {
    if (element > greatest) {
      greatest = element;
    }
  });
  return greatest;
}

console.log(largest(listA));
console.log(largest(listB));
console.log(largest(listC));