# Reverse Array

Includes a function that takes in some array, and returns that an array with all elements in reverse order.

## Inputs / Outputs

Inputs: [1, 2, 3, 4, 5, 6]\
Output: [6, 5, 4, 3, 2, 1]

## Algorithm

If we can grab ends of the array, we can swap their values.
* Use a for loop to look at all the elements in the array.(iterating through the array)
* At each item, I swap with the inverse array index.
* Only go halfway (give or take 1) and stop.
  * if we dont go halfway we will reswap

## Pseudocode

``` plaintext

function Reverse-Array takes in `arr`:

  declare start <- 0;
  declare end <- length of arr minus 1;

  while start <= end:
    declare temp <- arr[start]
    arr[start] <- arr[end]
    arr[end] <- temp
    
    start = start + 1
    end = end - 1
 ```
    
## Actual Code

(This would be a file that lives here)

## Visual

<img width="901" alt="reverse-array" src="https://user-images.githubusercontent.com/84699682/137825685-9ba94ff3-dfa1-40ef-9885-45a31acaca63.png">
