class Stack {
  constructor() {
    this.items = [];
  }

  // add elements to stack at end
  push(item) {
    this.items.push(item);
  }

  // remove elements from stack at end
  pop () {
    if(this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  // peek the first element
  peek() {
    if(!this.isEmpty()) return this.items[this.size() - 1];
    return 'No Elements in the Stack';
  }

  // isEmpty
  isEmpty() {
    return this.items.length === 0;
  }

  // size
  size() {
    return this.items.length;
  }

  // print
  print() {
    for(let i = 0; i < this.size() - 1; i++) {
      console.log(this.items[i]);
    }
  }
}

module.exports = Stack;
