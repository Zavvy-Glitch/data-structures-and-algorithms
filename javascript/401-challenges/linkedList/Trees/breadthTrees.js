'use strict';

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

function breadthFirst(root) {
  const array = [];

  let current = root;
  array.unshift(root);
  while(array.length){
    current = array.pop();

    console.log(current.value);

    for(let node of current.children) {
      array.unshift(node);
    }
  }
}

let node = new Tree(2);

node.root = new Node(15);
node.root.children.push(new Node(8), new Node(12));
node.root.children[0].children.push(new Node(16));
node.root.children[0].children[0].children.push(new Node(64), new Node(50));
node.root.children[1].children.push(new Node(35));
node.root.children[1].children[0].children.push(new Node(83));
node.root.children[1].children[0].children[0].children.push(new Node(6), new Node(4));

breadthFirst(node.root);

module.exports = { Node, Tree };


