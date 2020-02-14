let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);  //false

/*
  Primitive, like strings or numbers, are compared by their value.
  
  Arrays are objects and not primitives. JavaScript compares whether
  two objects are strictly equal by checking whether they are the same object,
  i.e. whether they reference the same location in memory.
  Since we constructed two array objects , they don't have the same reference.
*/
