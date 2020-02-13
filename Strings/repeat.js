function repeat(number, str) {
  let repeatedStr = '';

  for (let i = 0; i < number; i++)
    repeatedStr += str;

  return repeatedStr;
}

console.log(repeat(3, 'ha'));
