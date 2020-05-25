function allcaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
};

console.log(allcaps('testing 1234'))
console.log(allcaps('goodbye'))