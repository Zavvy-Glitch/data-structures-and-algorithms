# Array Binary Search
  
## Inputs / Outputs

| Input | Output |
| ----- | ------ |
| [4, 8, 15, 16, 23, 42], 15 | 2 |
| [-131, -82, 0, 27, 42, 68, 179], 42 | 4 |
| [11, 22, 33, 44, 55, 66, 77], 90 | -1 |
| [1, 2, 3, 5, 6, 7], 4 | -1 |

## Algorithm
- Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
- NOTE: The search algorithm used in your function should be a binary search.

## Pseudocode

```
 declare function BinarySearch <- must take in 2 parameters (sortedArray, searchKey, index(n))
 declare variable (L) <- position 0
 declare variable (R) <- position n -1
 
 while (L) is less than (R) cycle below
    (m) := floor((L +R) / 2)
    IF sortedArray[m] < searchKey THEN
          L := m + 1
      otherwise IF sortedArray[m] > searchKey THEN
          R := m -1
      otherwise:
          return m
    return unsuccessful
 ```
 
## Actual Code

## Visual
![BinarySearch](https://user-images.githubusercontent.com/84699682/138179444-49310bfa-bd0e-4e2e-a2b8-fff29f28dbd5.JPG)
![BinarySearch2](https://user-images.githubusercontent.com/84699682/138180598-6c855433-caf4-40c7-8f02-9ac6623dd372.JPG)
