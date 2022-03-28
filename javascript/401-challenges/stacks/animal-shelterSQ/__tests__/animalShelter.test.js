const AnimalShelter = require('../animal-shelterSQ.js');

test('AnimalShelter is a class', () => {
  expect(typeof AnimalShelter.prototype.constructor).toEqual('function');
});

test('can add cats or dogs to a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
  }).not.toThrow();
});

test('can add multiple cats or dogs to a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
  }).not.toThrow();
});

test('can remove a cat or a dog from a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
    q.dequeue({type:'dog'});
    q.dequeue({type:'cat'});
  }).not.toThrow();
});

test('can remove multiple cats or dogs from a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
    q.enqueue({type:'dog'});
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
    q.enqueue({type:'dog'});
    q.enqueue({type:'dog'});
    q.enqueue({type:'cat'});
    q.enqueue({type:'dog'});
    q.dequeue({type:'dog'});
    q.dequeue({type:'cat'});
    q.dequeue({type:'dog'});
    q.dequeue({type:'cat'});
  }).not.toThrow();
});
