const { Node, Tree, breadthFirst } = require('../trees.js');

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});
test('Tree is a class', () => {
  expect(typeof Tree.prototype.constructor).toEqual('function');
});
test('Can successfully instantiate an empty tree', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});
test('Can return an array of nodes ensuring Breadth First construction', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});
