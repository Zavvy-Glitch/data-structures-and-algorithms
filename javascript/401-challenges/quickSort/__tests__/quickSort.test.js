'use strict';

const { quickSort } = require('../index.js');

describe('Testing the quickSort function', () => {
  test('When given an unordered array, quickSort should return it in order', () => {

    let array = [8,4,23,42,16,15]
    let sortedArray = quickSort(array, 0, array.length - 1);
    console.log(sortedArray);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42])
  })
})
