'use strict';

const {insertSort, selectionSort} = require('../insertSort.js');


describe('Testing inserSort Function', () => {
  it('insertSort should take in an array and sort approriately in numerical order' , () => {
    let arr = [8,4,23,42,16,15];
    let newArray = [4,8,15,16,23,42];
    expect(insertSort(newArray)).toEqual(insertSort(arr));
  });
  it('selectionSort should take in an array and sort approriately in numerical order', () => {
    let arr = [8,4,23,42,16,15];
    let newArray = [4,8,15,16,23,42];
    expect(selectionSort(newArray)).toEqual(selectionSort(arr));
  })
});



