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

let arr = [8,4,23,42,16,15];
insertSort(arr);
console.log(arr);
