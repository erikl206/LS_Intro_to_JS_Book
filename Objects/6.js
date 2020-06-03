let myProtoObj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

myObj = Object.create(myProtoObj);

//snippet one doesn't iterate over the prototyped keys
//snippet two iterates overall the keys, prototype included