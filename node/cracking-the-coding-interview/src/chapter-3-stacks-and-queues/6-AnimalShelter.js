/**
 * Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out "basis.
 * People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select
 * whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which
 * specific animal they would like. Create the data structures to maintain this system and implement operations such as
 * enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linkedlist data structure.
 */

const { LinkedList } = require('../LinkedLists/LinkedList');
class Animal {
  #order;
  _name;

  constructor(n) {
    this._name = n;
  }

  setOrder(ord) {
    this.#order = ord;
  }

  getOrder() {
    return this.#order;
  }

  isOlderThan(a) {
    return this.#order < a.getOrder();
  }

}


class AnimalQueue {
  dogs = new LinkedList();
  cats = new LinkedList();
  #order = 0;

  enqueue(a) {
    a.setOrder(this.#order);
    this.#order++;

    if (a instanceof Dog) this.dogs.push(a);
    else if (a instanceof Cat) this.cats.push(a);

  }

  dequeueAny() {
    /* Look at tops of dog and cat queues, and pop the queue with the oldest value. */
    if (this.dogs.size() === 0) {
      return this.dequeueCats();
    } else if (this.cats.size() === 0) {
      return this.dequeueDogs();
    }

    const dog = this.dogs.getLast();
    const dogObj = new Dog(dog.data._name);
    dogObj.setOrder(dog.data.getOrder());

    const cat = this.cats.getLast();
    const catObj = new Cat(cat.data._name);
    catObj.setOrder(cat.data.getOrder());

    if (dogObj.isOlderThan(catObj)) {
      return this.dequeueDogs();
    } else {
      return this.dequeueCats();
    }
  }

  dequeueDogs() {
    return this.dogs.shift() || 'None';
  }

  dequeueCats() {
    return this.cats.shift() || 'None';
  }
}

class Dog extends Animal {
  constructor(n) {
    super(n);
  }
}

class Cat extends Animal {
  constructor(n) {
    super(n);
  }
}

module.exports = {
  AnimalQueue,
  Cat,
  Dog
};