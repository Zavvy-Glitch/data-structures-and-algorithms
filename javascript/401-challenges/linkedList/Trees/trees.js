"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }
//   preOrder(value) {
//     if (value !== null) {
//       console.log(value.value);
//       this.preOrder(value.left);
//       this.preOrder(value.right);
//     }
//   }

//   inOrder(value) {
//     if (value !== null) {
//       this.inOrder(value.left);
//       console.log(value.value);
//       this.inOrder(value.right);
//     }
//   }

//   postOrder(value) {
//     if (value.left) {
//       this.postOrder(value.left);
//     }

//     if (value.right) {
//       this.postOrder(value.right);

//       console.log(value.value);
//     }
//   }

// }

class BinarySearch {
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
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
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

  findMinNode(node){
    if(node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
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

  contains(node, data){
    if(node === null)
      return null;
    else if(node < node.data)
      return this.contains(node.left, data);
    else if(node > node.data)
      return this.contains(node.right, data);
    else
      console.log(node);
  }

}

const treeNode = new BinarySearch();
treeNode.add(2);
treeNode.add(12);
treeNode.add(30);
treeNode.add(1);
treeNode.add(9);
treeNode.add(10);
treeNode.add(45);
treeNode.add(20);
treeNode.add(80);
treeNode.add(11);
treeNode.add(73);
treeNode.add(1);

const root = treeNode.getRootNode();


treeNode.inOrder(root);
console.log('********In-Order Traversal********');
treeNode.preOrder(root);
console.log('********Pre-Order Traversal********');
treeNode.postOrder(root);
console.log('********Post-Order Traversal********');

module.exports = { BinarySearch, Node };
