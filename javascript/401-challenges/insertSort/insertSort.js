'use strict';

function insertSort(arr) {
  let i, key, j;
  for(i=1; i < arr.length; i++){
    key = arr[i];
    j = i-1;
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j=j-1;
    }
    arr[j+1] = key;
  }
}

function selectionSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = i + 1; j < n; j++){
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let arr = [8,4,23,42,16,15];
insertSort(arr);
selectionSort(arr);
console.log(arr);

module.exports = { insertSort };
