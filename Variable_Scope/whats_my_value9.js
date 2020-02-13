const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/*
  Variables declared by const are block scoped, similar to variables
  declared by let, but their value cannot changed through re-assignment.
  When we try to re-assign a to a new value on line 4, we get an error.
  TypeError: Assignment to constant variable.
*/
