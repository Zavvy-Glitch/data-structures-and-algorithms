'use strict'

function binarySearch(arr, val) {
  let l = 0;
  let r = arr.length -1;
  let mid; //placeholder

  while (r >= l) {
      mid = l + Math.floor((r - l) / 2)
      //this will calculate the middle index
      if(arr[mid] === val) {
          return mid;
      } if (arr[mid] > val) {
          r = mid - 1;
      } else (l = mid + 1)
  }
  return -1;
}
// To test this create a random dataset to plug into the function
const array = [1, 2, 3, 8, 16, 32, 50, 54, 68, 72, 76, 90]
const value = 68;
const result = binarySearch(array, value)
console.log(result)