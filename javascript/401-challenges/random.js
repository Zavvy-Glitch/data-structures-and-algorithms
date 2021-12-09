'use strict';


function uniqueChars (string) {
  let words = string.split(' ');
  words.sort();
  for (let i = 0; i < words.length -1; i++) {
    if(words[i] !== words[i + 1])
      continue;
    else
      return false;
  }
  return true;
}


// let string = 'i love cats';
let string = 'the quick brown fox jumps over the lazy dog';

console.log(uniqueChars(string));
