'use strict';

const { BinaryTree } = require('../trees/trees.js')
const HashTable = require('../hashTables/hashTable.js')

function tree_intersection(list1, list2) {
  const hashedList = new HashTable(1024);
  const intersections = [];

  addNodes(list1.root, hashedList);
  checkIntersection(list2.root, hashedList, intersections);
  return intersections;
}

function addNodes(node, table) {
  if(node){
    table.set(node.data.toString(), node.data);
    addNodes(node.left, table);
    addNodes(node.right, table);
  }
  return
}

function checkIntersection(node, table, intersections) {
  if(node) {
    if(table.contains(node.data.toString())){
      intersections.push(node.data);
    }
    checkIntersection(node.left, table, intersections);
    checkIntersection(node.right, table, intersections)
  }
  return
}


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


console.log(tree_intersection(list1, list2));

module.exports = tree_intersection