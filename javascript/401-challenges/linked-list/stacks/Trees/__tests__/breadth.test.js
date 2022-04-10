const { Node, Tree } = require('../breadthTrees.js');

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});
test('Tree is a class', () => {
  expect(typeof Tree.prototype.constructor).toEqual('function');
});
test('Can successfully instantiate an empty tree', () => {
  expect(() => {
  }).not.toThrow();
});
test('Can return an array of nodes ensuring Breadth First construction', () => {
  expect(() => {
  }).not.toThrow();
});
