/*
 The condition in a while statement is checked before executing the block,
 while in a condition do..while statement is checked after the block has been
 executed. So the block in a do..while statement will always be executed at
 least once, even if the condition is not satisfied.

*/

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
//it logs nothing

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
