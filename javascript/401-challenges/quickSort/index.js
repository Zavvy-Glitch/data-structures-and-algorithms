'use strict';

function swap(arr, left, right){
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left)/2)],
    i = left,
    j = right;
  while(i <= j){
    while(arr[i] < pivot) {
      i++;
    }
    while(arr[j] > pivot){
      j--;
    }
    if(i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  let index;
  if(arr.length > 1) {
    index = partition(arr, left, right);
    if(left < index - 1){
      quickSort(arr, left, index -1);
    }
    if(index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

let arr = [8, 4, 23, 42, 16, 15, 19, 81, 26, 54];

let sortArr = quickSort(arr, 0, arr.length-1);
console.log(sortArr);