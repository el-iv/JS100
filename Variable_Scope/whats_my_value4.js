function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction(); // 1

/*
  Variables declared in an outer scope can be accessed in any inner scope.
  In out case, the variable a is declared in the function definition and then
  accessed in the body of the if statement. 

*/
