const PseudoQueue = require('../pseudoQueue.js');

test('PseudoQueue is a class', () => {
  expect(typeof PseudoQueue.prototype.constructor).toEqual('function');
});

test('can remove elements from a PseudoQueue', () => {
  const s = new PseudoQueue();
  expect(() => {
    s.enqueue(10);
    s.enqueue(10);
    s.enqueue(15);
    s.enqueue(20);
    s.enqueue(5);
    s.dequeue;
    s.dequeue;
    s.dequeue;
    s.dequeue;
  }).not.toThrow();
});

test('can add elements into a PseudoQueue', () => {
  const s = new PseudoQueue();
  expect(() => {
    s.enqueue(10);
    s.enqueue(10);
    s.enqueue(15);
    s.enqueue(20);
    s.enqueue(5);
  }).not.toThrow();
});

test('Order of elements is maintained when enqueue is instantiated following a FIFO approach', () => {
  const s = new PseudoQueue();
  expect(() => {
    s.enqueue(10);
    s.enqueue(15);
    s.enqueue(20);
    s.enqueue(5);
  }).not.toThrow();
});

test('Order of elements is maintained when dequeue is instantiated following a FIFO approach', () => {
  const s = new PseudoQueue();
  s.enqueue(5);
  s.enqueue(10);
  s.enqueue(15);
  s.enqueue(20)
  expect(s.dequeue()).toEqual(5);
  expect(s.dequeue()).toEqual(10);
  expect(s.dequeue()).toEqual(15);
  expect(s.dequeue()).toEqual(20);
  expect(s.dequeue()).toEqual('Empty Queue');
});

test('Dequeue an empty queue should raise an exception', () => {
  const s1 = new PseudoQueue();

  expect(s1.dequeue()).toEqual('Empty Queue');
})
