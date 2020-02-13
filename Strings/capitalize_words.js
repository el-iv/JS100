let str = 'launch school tech & talk';
let words = str.split(' ');
let capWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  capWords.push(word[0].toUpperCase() + word.substring(1, word.length));
}

console.log(capWords.join(' '));
