# Array Binary Search

## Problem Domain
- Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
- NOTE: The search algorithm used in your function should be a binary search.

## Inputs / Outputs

| Input | Output |
| ----- | ------ |
| [4, 8, 15, 16, 23, 42], 15 | 2 |
| [-131, -82, 0, 27, 42, 68, 179], 42 | 4 |
| [11, 22, 33, 44, 55, 66, 77], 90 | -1 |
| [1, 2, 3, 5, 6, 7], 4 | -1 |

## Algorithm
- declare BinarySearch as a function.
- BinarySearch Function will take in 2 parameters
    - arr, val
- We'll need 2 pointers, one for the lower(left) end, another for the higher(right) end.
- We'll also declare a mid variable as a place holder.
- If the value = array[mid] then, return mid.
- If the value is less than the mid value, then we know the value is in the left half of the array.
- If the value is greater than the mid value, then we know the value is in the right half of the array.
- If the value isn't present in either cases we will return -1

## Pseudocode

```
 declare function BinarySearch <- (arr, val)
 declare variable (L) <- start position 0
 declare variable (R) <- start position arr.length - 1
 declare variable mid <- 'undefined'

 while (R) is less than or = (L) cycle below
    (mid) = L + Math.floor((R - L) / 2)
    IF array[mid] equals val
        then return mid;
    IF array[mid] is LESS than val
        then run R = mid -1;
    If it doesn't pass the condition above we know its in the other half
        then run L = mid + 1;
    If the value is not found;
        then return -1; 
 ```
 
## Actual Code
```javascript

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
// To test this I'll create a random dataset to plug into the function
const array = new Array( 1, 2, 3, 8, 16, 32, 50, 54, 68, 72, 76, 90)
const value = 68;
const result = binarySearch(array, val)
console.log(result)
//This should return with the index position of 8
```
## Visual
![BinarySearch](https://user-images.githubusercontent.com/84699682/138179444-49310bfa-bd0e-4e2e-a2b8-fff29f28dbd5.JPG)
![BinarySearch2](https://user-images.githubusercontent.com/84699682/138180598-6c855433-caf4-40c7-8f02-9ac6623dd372.JPG)
