/*
stack operations:
1.push
2.pop
3.peek
4.empty
5.swap
 */
class Stack {
  constructor(capacity) {
    this.items = [];
    this.capacity = capacity;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.items.length >= this.capacity;
  }

  push(val) {
    if(this.isFull()) {
      console.log("overflow occured");
      return;
    }
    this.items.push(val);
  }

  pop() {
    if(this.isEmpty()) {
      console.log("underflow occured");
      return;
    }
    this.items.pop();
  }
}

const stack = new Stack(3);
console.log(stack.isEmpty());
stack.push(12);
stack.push(20);
stack.push(30);
console.log(stack.isFull());
stack.pop();
console.log(stack);