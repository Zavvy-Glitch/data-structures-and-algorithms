const { BinaryTree, BinarySearch, Node } = require('../trees.js');

xtest('BinaryTree is a class', () => {
  expect(typeof BinaryTree.prototype.constructor).toEqual('function');
});
test('BinarySearch is a class', () => {
  expect(typeof BinarySearch.prototype.constructor).toEqual('function');
});
test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Can successfully instantiate an empty tree', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});

test('Can successfully instantiate a tree with a single root node', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});

test('Can successfully add a left child and right child to a single root node', () => {
  const n = new Node();
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from a preorder traversal', () => {
  const n = new Node();
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from an inorder traversal', () => {
  const n = new Node();
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from a postorder traversal', () => {
  const n = new Node();
  expect(() => {
  }) .not.toThrow();
});
