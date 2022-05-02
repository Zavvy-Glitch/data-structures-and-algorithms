"use strict";

const HashTable = require("./hashTable");

function repeatedWord(string) {
  let mappedWords = new HashTable(1024);
  let words = string.split(' ');
  let wordMap = {};
  for(let i in words) {
    mappedWords.set(words[i]);
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }

  // let wordsArray = "Once upon a time, there was a brave princess who..."
  let wordsArray = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
  
  console.log(repeatedWord(wordsArray));
