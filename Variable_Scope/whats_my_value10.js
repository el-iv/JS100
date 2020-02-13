const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
// { firstName: 'Jane', lastName: 'Doe' }

/*
  The fact that const variables cannot be re-assigned does not mean that
  the value they hold is immutable.
  Objects that are assigned to const variables can be mutated.
*/
