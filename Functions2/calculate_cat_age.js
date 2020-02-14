function catAge(humanYears) {
  if (humanYears === 1)
    return 15;
  else if (humanYears === 2)
   return 15 + 9;
  else
    return 15 + 9 + (humanYears - 2) * 4;
}

console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
