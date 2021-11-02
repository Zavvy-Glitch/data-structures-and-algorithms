const PseudoQueue = require('../pseudoQueue.js');

test('PseudoQueue is a class', () => {
  expect(typeof PseudoQueue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const q = new PseudoQueue();
  expect(() => {
    q.enqueue(10);
    q.enqueue(15);
    q.enqueue(20);
    q.enqueue(5);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new PseudoQueue();
  expect(() => {
    q.enqueue(10);
    q.enqueue(10);
    q.enqueue(15);
    q.enqueue(20);
    q.enqueue(5);
    q.dequeue;
    q.dequeue;
    q.dequeue;
    q.dequeue;
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new PseudoQueue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
  expect(() => {q.dequeue();}).toThrow();
});

test('Queue objects from data1 should pass into data2', () => {
  const q = new PseudoQueue();
  q.enqueue(10);
  q.enqueue(15);
  q.enqueue(20);
  q.enqueue(5);
  expect(q.dequeue()).toEqual(10);
});
