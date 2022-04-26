'use strict';

const { mergeSort } = require('../mergeSort.js');


describe('Testing mergeSort Function', () => {
  it('should take in an array and sort approriately in numerical order' , () => {
    let arr = [8,4,23,42,16,15];
    let newArray = [4,8,15,16,23,42];
    expect(newArray).toEqual(mergeSort(arr));
  });

  it('should return the original array if array length is equal to or less than 1', () => {
    let arr = [1];
    expect(arr).toEqual(mergeSort(arr));
  })
});


