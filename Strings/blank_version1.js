function isBlank(str) {
  return str === '' ? true : false;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
