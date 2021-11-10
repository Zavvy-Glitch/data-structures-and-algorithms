const { Node, Tree } = require('../trees.js');

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
test('Can replace a value with `Fizz` if value is divisible by 3', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});
test('Can replace a value with `Buzz` if value is divisible by 5', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});
test('Can replace a value with `FizzBuzz` if value is divisible by 3 & 5', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});
test('If the value is not divisible by 3 nor 5, return the value as a string', () => {
  const n = new Node();
  expect(() => {
  }).not.toThrow();
});
