'use strict';

//example array and value

const array = [2,3,4,5];
const val = 10;

const num = val;
const arr = array;

function insertShiftArray(){
  let newArr = [];
  let j = 0;
  for(let i = 0; i < arr.length +1; i++){
    if(i === arr.length/2){
      newArr[i]=num;
    } else {
      newArr[i] = arr[j];
      j++;
    }
  }
  return newArr;
}

console.log(insertShiftArray(arr, num));
