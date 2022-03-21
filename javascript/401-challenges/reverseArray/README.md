# Reverse Array

Includes a function that takes in some array, and returns that an array with all elements in reverse order.

## Inputs / Outputs

Inputs: [1, 2, 3, 4, 5, 6]\
Output: [6, 5, 4, 3, 2, 1]

## Algorithm

Will need two parts / pointers (start and end)
The start and end values should swap their positions values.
Then increment start and decrement end.

Will require a temporary variable to hold front value to be used.

IF end is greater that start in terms of index position value, stop the process.

return the reversed array

## Pseudocode

``` plaintext

function reverseArray takes in `arr`:

  declare start <- 0;
  declare end <- length of arr minus 1;

  while start <= end:
    declare temp <- arr[start]
    arr[start] <- arr[end]
    arr[end] <- temp
    
    start will increment
    end will decrement
    
    return reverseArray
 ```
    
## Actual Code

``` plaintext

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while(end > start) {
    let temp = arr[start];
    arr[front] = arr[end];
    arr[end] = temp;
    
    start++
    end--;
  }
  return reverseArray;
}
```
## Visual

<img width="901" alt="reverse-array" src="https://user-images.githubusercontent.com/84699682/137825685-9ba94ff3-dfa1-40ef-9885-45a31acaca63.png">
