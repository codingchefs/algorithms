const LLNode = require('./LLNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new LLNode(element);
    let current;
    if(this.head ==  null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

module.exports = LinkedList;