'use strict';

const { BinaryTree } = require('../../trees/trees.js');
// const HashTable = require('../../hashTables/hashTable.js');
const tree_intersection = require('../tree-intersection.js');


describe('Testing Intersections Between Trees', () => {
  test('tree_intersection Function should be able return a list of intersecting values between two trees', () => {
    let array = tree_intersection(list1, list2);
    expect(array).toEqual([
      100, 600, 160,
      125, 200, 175,
      350, 500
    ])
  })
})

const list1 = new BinaryTree;
list1.add(150);
list1.add(100);
list1.add(250);
list1.add(75);
list1.add(160);
list1.add(200);
list1.add(350);
list1.add(125);
list1.add(175);
list1.add(300);
list1.add(500);

const list2 = new BinaryTree;
list2.add(42);
list2.add(100);
list2.add(600);
list2.add(15);
list2.add(160);
list2.add(200);
list2.add(350);
list2.add(125);
list2.add(175);
list2.add(4);
list2.add(500);