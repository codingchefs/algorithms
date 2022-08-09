class Queue {
  constructor() {
    this.items=[];
  }

  // to add elements
  enqueue(item) {
    this.items.push(item);
  }

  // to delete elements
  dequeue() {
    // check if queue empty, before removing
    if(this.isEmpty()) {
      return 'Underflow';
    }

    return this.items.shift();
  }

  // get the front element
  front() {
    // check if queue is empty, before fetching front item
    if(this.isEmpty()) {
      return 'No Elements in the Queue';
    }

    return this.items[0];
  }

  // size
  size() {
    return this.items.length;
  }

  // isEmpty
  isEmpty() {
    return (this.items.length === 0);
  }

  // print
  print() {
    for(let i=0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
  }

}

module.exports = Queue;
