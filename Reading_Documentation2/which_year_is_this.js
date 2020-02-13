let today = new Date();
let year = today.getYear();
let year2 = today.getFullYear();
console.log(year);
console.log(year2);

/*
  .getYear() returns a number representing the year of the day on which it is
  invoked, minus 1900;

  .getFullYear() returns a number representing the year of the date on which it
  is invoked.

  One should use .getFullYear() as getYear() is deprecated.
*/
