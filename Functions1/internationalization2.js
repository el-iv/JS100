function extractLanguage(locale) {
  return locale.substring(0, 2);
}


function extractRegion(locale) {
  return locale.substring(3, 5);
}

function localGreet(locale){
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (language) {
    case 'en':
      if (region === 'US')
        return 'Hey';
      else if (region === 'GB')
        return 'Hello!';
      else
        return 'Howdy!';
    case 'fr':
      return 'Salut!';
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
