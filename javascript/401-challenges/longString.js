'use strict';

let arr =['this', 'word', 'is', 'the', 'longest', 'alphabet'];

const longest = arr.reduce(
  function(a, b) {
    return a.length > b.length ? a : b;
  }
);
console.log(longest);
