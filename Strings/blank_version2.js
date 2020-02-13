function isBlank(str) {
  return str.trim() === '' ? true: false;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
