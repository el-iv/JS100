function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
// ReferenceError: Cannot access 'a' before initialization

/*
  Variables declared by let aren't available until the code runs.
  Therefore, the let statement on line 6 creates a new variable that
  isn't available on line 5. Since we try to log a before assigning it a
  value, a ReferenceError is raised. 
*/
