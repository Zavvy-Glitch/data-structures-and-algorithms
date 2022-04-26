'use strict';


function mergeSort(arr){
  const mid = Math.floor(arr.length/2);

  if(arr.length <= 1){
    return arr;
  }

  if(arr.length >= 2){
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
}

function merge(left, right) {
  let sorted = [];

  while(left.length && right.length) {
    if (left[0] < right[0]){
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left.slice().concat(right.slice()));
}


let array = [8, 4, 23, 42, 16, 15];

console.log(mergeSort(array));

module.exports = { mergeSort };
