# Array Insert Shift

- Utilize a function called insertShiftArray that takes in an array and a value to be added. Do not use built-in methods such as .splice / .split / etc.
- It must return an array with a new value added at the middle index of the array.

## Input
```
Array       Value
[2,4,6,20], 10

      OR
      
Array           Value
[15,82,3,10,5], 16
```

## Output
```
[2,4,10,6,20]

      OR

[15,82,3,16,10,5]
```

## Algorithm
If we can iterate over the array and locate the central index, we can insert the desired value.
  - Create a new array
  - Use a for loop to iterate through the original array.
  - Loop must only go halfway and insert the desired value.
  - Return the new array with the newly inserted value that is in the middle index of the original array.
  
## Pseudocode
```

declare num <- value
declare arr <- array

declare function insertShiftArray that takes in array and value;
 
  declare newArray <- empty array
  declare variable(j) <- 0

    while variable(i) <- 0, variable(i) <- arr.length + 1; i increments
    
    if variable(i) === arr.length/2 <- newArray[i]=num
    
    otherwise newArr[i] <- arr[j]; j++

    
return newArray <- arr, num

```
## Actual Code
```
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
```

## Visual
![arrayInsertShift](https://user-images.githubusercontent.com/84699682/137991677-b0654ff7-b04a-4949-b847-ed8cfec6814e.JPG)
