const { Queue } = require('../QueueStacks/linkedListsQueue.js');

// class Animal {
//   constructor(type) {
//     this.type = type;
//   }
// }

class AnimalShelter {
  constructor(){
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'dog'){
      this.dog.enqueue(animal);
      return this.dog;
    } else if(animal.type === 'cat'){
      this.cat.enqueue(animal);
      return this.cat;
    } else {
      console.error ('We are over capacity');
    }
  }

  dequeue(pref) {
    if(pref.type === 'dog') {
      this.dog.dequeue(pref);
      return this.dog;
    } else if(pref.type === 'cat') {
      this.cat.dequeue(pref);
    } else if (!pref.type === 'cat'){
      return null;
    } else if (!pref.type === 'dog'){
      return null;
    }
  }
}

// let animals = new AnimalShelter();

// animals.enqueue({type:'dog'});
// animals.enqueue({type:'dog'});
// animals.enqueue({type:'dog'});
// animals.enqueue({type:'dog'});
// animals.enqueue({type:'pig'});
// animals.enqueue({type:'dog'});
// animals.enqueue({type:'cat'});
// animals.enqueue({type:'cat'});
// animals.enqueue({type:'cat'});
// animals.enqueue({type:'dog'});
// animals.dequeue({type:'dog'});
// animals.dequeue({type:'dog'});
// animals.dequeue({type:'dog'});
// animals.dequeue({type:'dog'});
// animals.dequeue({type:'dog'});
// animals.dequeue({type:'dog'});

// console.log(animals.dog, animals.cat);



module.exports = AnimalShelter;
