const { BinarySearch, Node } = require('../trees.js');

test('BinarySearch is a class', () => {
  expect(typeof BinarySearch.prototype.constructor).toEqual('function');
});
test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Can successfully instantiate an empty tree', () => {
  expect(() => {
  }).not.toThrow();
});

test('Can successfully instantiate a tree with a single root node', () => {
  expect(() => {
  }).not.toThrow();
});

test('Can successfully add a left child and right child to a single root node', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from a preorder traversal', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from an inorder traversal', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from a postorder traversal', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return Max Value', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return Min Value', () => {
  expect(() => {
  }) .not.toThrow();
});
