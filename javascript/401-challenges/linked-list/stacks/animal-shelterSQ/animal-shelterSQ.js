const { Queue } = require('../QueueStacks/stacksAndQueues.js');

class AnimalShelter {
  constructor(){
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'Dog'){
      this.dog.enqueue(animal);
      return this.dog;
    } else if(animal.type === 'Cat'){
      this.cat.enqueue(animal);
      return this.cat;
    } else {
      console.error ('Sorry, we cant take them');
    }
  }

  dequeue(preference) {
    if(preference.type === 'Dog') {
      this.dog.dequeue(preference);
      return this.dog;
    } else if(preference.type === 'Cat') {
      this.cat.dequeue(preference);
    } else if (!preference.type === 'Cat'){
      return null;
    } else if (!preference.type === 'Dog'){
      return null;
    }
  }
}


module.exports = AnimalShelter;
