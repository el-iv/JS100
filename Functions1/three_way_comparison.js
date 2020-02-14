function compareByLength(str1, str2) {
  if (str1.length < str2.length)
    return -1;
  else if (str1.length > str2.length)
    return 1;
  else
    return 0;
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));
