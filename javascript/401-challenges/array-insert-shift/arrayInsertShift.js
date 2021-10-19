'use strict';

//example array and value

const array = [2,3,4,5];
const value = 10;

const num = value;
const arr = array;

function insertShiftArray(){
  let newArray = [];
  let j = 0;
  for(let i = 0; i < arr.length +1; i++){
    if(i === arr.length/2){
      newArray[i]=num;
    } else {
      newArray[i] = arr[j];
      j++;
    }
  }
  return newArray;
}

console.log(insertShiftArray(arr, num));
