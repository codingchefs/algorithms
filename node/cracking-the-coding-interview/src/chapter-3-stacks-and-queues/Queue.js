class Queue {
  constructor() {
    this.items = [];
  }

  // to add elements
  enqueue(item) {
    this.items.push(item);
  }

  // to delete elements
  dequeue() {
    if (!this.isEmpty()) return this.items.shift();
    return 'Underflow';
  }

  // get the front element
  front() {
    if (!this.isEmpty()) return this.items[0];
    return 'No Elements in the Queue';
  }

  // size
  size() {
    return this.items.length;
  }

  // isEmpty
  isEmpty() {
    return this.items.length === 0;
  }

  // print
  print() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
  }

}

module.exports = Queue;
