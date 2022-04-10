'use strict';

const { Queue } = require('../QueueStacks/stacksAndQueues.js');


class Node {
  constructor(value, k =0) {
    this.value = value;
    this.children = new Array(k);
  }
}

class Tree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
}

//read all siblings on the current level before traversing subtrees
function breadthFirst(root) {
  const array = [];
  let result = [];
  let current = root;
  array.unshift(root);
  while(array.length){
    current = array.pop();
    result.push(current.value);
    for(let node of current.children) {
      array.unshift(node);
    }
  }
  return result;
}

function fizzBuzzTree(node) {
  let result = [];
  let i;

  for (i = 0; i < node.length; i++) {
    if((node[i]%15) === 0)
      result.push('FizzBuzz');
    else if ((node[i]%3) === 0)
      result.push('Fizz');
    else if ((node[i]%5) === 0)
      result.push(' Buzz');
    else
      result.push(node[i].toString());
  }
  return result;
}

let node = new Tree(2);

node.root = new Node(15);
node.root.children.push(new Node(8), new Node(12));
node.root.children[0].children.push(new Node(16));
node.root.children[0].children[0].children.push(new Node(64), new Node(50));
node.root.children[1].children.push(new Node(35));
node.root.children[1].children[0].children.push(new Node(83), new Node(135));
node.root.children[1].children[0].children[0].children.push(new Node(6), new Node(4));


console.log(breadthFirst(node.root));
console.log(fizzBuzzTree(breadthFirst(node.root)));

module.exports = { Node, Tree };
