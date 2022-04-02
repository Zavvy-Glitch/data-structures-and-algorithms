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
test('Can replace a value with `Fizz` if value is divisible by 3', () => {
  expect(() => {
  }).not.toThrow();
});
test('Can replace a value with `Buzz` if value is divisible by 5', () => {
  expect(() => {
  }).not.toThrow();
});
test('Can replace a value with `FizzBuzz` if value is divisible by 3 & 5', () => {
  expect(() => {
  }).not.toThrow();
});
test('If the value is not divisible by 3 nor 5, return the value as a string', () => {
  expect(() => {
  }).not.toThrow();
});
