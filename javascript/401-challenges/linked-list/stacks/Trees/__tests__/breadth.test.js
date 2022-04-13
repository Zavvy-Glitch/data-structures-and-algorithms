const { Node, KaryTree } = require('../trees.js');

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});
test('Tree is a class', () => {
  expect(typeof KaryTree.prototype.constructor).toEqual('function');
});
test('Can successfully instantiate an empty tree', () => {
  expect(() => {
  }).not.toThrow();
});
test('Can return an array of nodes ensuring Breadth First construction', () => {
  expect(() => {
  }).not.toThrow();
});
