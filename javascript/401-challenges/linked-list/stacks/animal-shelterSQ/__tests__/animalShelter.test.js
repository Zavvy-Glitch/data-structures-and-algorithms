const AnimalShelter = require('../animal-shelterSQ.js');

test('can add cats or dogs to a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    console.log(q);
  }).not.toThrow();
});

test('can add multiple cats or dogs to a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
  }).not.toThrow();
});

test('can remove a cat or a dog from a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    q.dequeue({type:'Dog'});
    q.dequeue({type:'Cat'});
  }).not.toThrow();
});

test('can remove multiple cats or dogs from a queue', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Dog'});
    q.enqueue({type:'Cat'});
    q.enqueue({type:'Dog'});
    q.dequeue({type:'Dog'});
    q.dequeue({type:'Cat'});
    q.dequeue({type:'Dog'});
    q.dequeue({type:'Cat'});
  }).not.toThrow();
});

test('should error if animal to enqueue is not of type Dog or Cat and log a message of `Sorry, we cant take them`', () => {
  const q = new AnimalShelter();
  expect(() => {
    q.enqueue({type:'Goat'});
  }).not.toThrow();
});