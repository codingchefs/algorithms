class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor(head, length = 0 ) {
    this.head = head;
    this.length = length;
  }

  unshift(data){
    const newNode = new Node(data, this.head);
    this.length++;
    this.head = newNode;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while(currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // Returns count of nodes in linked list
  size() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  shift() {
    if(!this.head) return null;
    // remove the first node
    const oldNode = this.head;
    this.length--;
    this.head = this.head.next;
    return oldNode;
  }

  pop() {
    // remove the last element from last
    if(this.length <= 1) {
      return this.shift();
    }
    let currentNode = this.head;
    let lastNode = this.getLast();

    while(currentNode.next !== lastNode) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.length--;
    return lastNode;
  }

  push(data) {
    if(!this.head) {
      return this.unshift(data);
    }
    const lastNode = this.getLast();
    lastNode.next = new Node(data);
    this.length++;
  }

  get(index) {
    if(index >= this.length || index < 0) return null;
    let counter = 0;
    let currentNode = this.head;
    while(counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, data) {
    if(!this.get(index)) {
      return false;
    }
    let indexNode = this.get(index);
    indexNode.data = data;
    return true;
  }

  remove(index) {

    if(index ===0) {
      return this.shift();
    }

    else if(!this.get(index)) {
      return false;
    }

    const prevNode = this.get(index -1);
    let nodeToRemove = prevNode.next;

    prevNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }

  insert(index, data) {
    if(index === 0){
      this.unshift(data);
      return true;
    } else if(!this.get(index)) {
      return false;
    }

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = new Node(data, nextNode);
    this.length ++;
    return true;
  }

  convertArrayToLinkedList (arr) {
    arr.forEach(ele => this.push(ele));
    return true;
  }

  print () {
    let l = this.head;
    while (l) {
      console.log(l.data);
      l = l.next;
    }
  }

}

module.exports = {
  LinkedList,
  Node,
};
