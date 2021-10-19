# Array Insert Shift

- Utilize a function called insertShiftArray that takes in an array and a value to be added. Do not use built-in methods such as .splice / .split / etc.
- It must return an array with a new value added at the middle index of the array.

## Input
```
[2,4,6,20], 10

      OR

[15,82,3,10,5], 16
```

## Output
```
[2,4,10,6,20]

      OR

[15,82,3,16,10,5]
```

## Algorithm
If we can iterate from both ends of the array and locate the central index, we can insert the desired value.

  - Use a for loop to iterate through the array.
  - Loop must only go halfway and insert the desired value.
  - Return the array with the newly inserted value that is in the middle index of the array.
  
## Visual
