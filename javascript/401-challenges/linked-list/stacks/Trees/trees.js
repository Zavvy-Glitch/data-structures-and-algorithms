'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.addNode(this.root, newNode);
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    } else {
      if(newNode.data > node.data) {
        if (node.right === null) node.right = newNode;
        else this.addNode(node.right, newNode);
      }
    }
  }

  delete(data){
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, key){
    if(node === null)
      return null;
    else if(key < node.data){
      node.left = this.deleteNode(node.left, key);
      return node;
    }
    else if(key > node.data){
      node.right = this.deleteNode(node.right, key);
      return node;
    }
    else {
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }
      if(node.left === null){
        node = node.right;
        return node;
      }
      else if(node.right === null){
        node = node.left;
        return node;
      }
      const temp = this.findMinNode(node.right);
      node.data = temp.data;

      node.right = this.deleteNode(node.right, temp.data);
      return node;
    }
  }

  findMax(node){
    if(node === null)
      return Number.MIN_VALUE;

    let res = node.data;
    let lres = this.findMax(node.left);
    let rres = this.findMax(node.right);

    if (lres > res)
      res = lres;
    if (rres > res)
      res = rres;
    return res;
  }

  findMin(node){
    if(node.left === null)
      return;

    let result = node.data;
    let lresult = this.findMin(node.left);
    let rresult = this.findMin(node.right);

    if(lresult < result) result = lresult;
    if(rresult < result) result = rresult;
    return result;
  }

  getRootNode() {
    return this.root;
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  breadthFirst(node) {
    let result = [];
    let current = node;
    const array = [current];
    while(array.length) {
      current = array.pop();
      result.push(current.data);
      if (current.left) array.unshift(current.left);
      if(current.right) array.unshift(current.right);
      }
      return result;
    }

  contains(node, data){
    if(node === null)
      return null;
    else if(node < node.data)
      return this.contains(node.left, data);
    else if(node > node.data)
      return this.contains(node.right, data);
    else
      return node;
  }

}

const treeNode = new BinaryTree();
treeNode.add(22);
treeNode.add(12);
treeNode.add(30);
treeNode.add(16);
treeNode.add(9);
treeNode.add(10);
// treeNode.add(45);
// treeNode.add(20);
// treeNode.add(80);
// treeNode.add(11);
// treeNode.add(73);
// treeNode.add(8);


const root = treeNode.getRootNode();

console.log('---------------------------', treeNode)

// console.log('********In-Order Traversal********');
// treeNode.inOrder(root);
// console.log('********Pre-Order Traversal********');
// treeNode.preOrder(root);
// console.log('********Post-Order Traversal********');
// treeNode.postOrder(root);
// console.log('**************Max Value is', treeNode.findMax(root));
console.log('******Breadth First Traversal******', treeNode.breadthFirst(root));


module.exports = { BinaryTree, Node };
