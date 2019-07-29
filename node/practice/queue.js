class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    let node = new Node(value);

    if(this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.next = node;

      this.back = node;
    }

  }

  dequeue() {
    let node = this.front;


    if(this.isEmpty()) {
      console.log("UNDERFLOW ERROR")
      return;
    } else {
      this.front = this.front.next;
    }

    if(!this.front) {
      this.back = null;
    }

    return node;
  }

  print() {
    // if the queue is empty
    if(this.isEmpty()) {
      console.log('EMPTY QUEUE');
    } else {
      let tmpArr = [];

      let tmp = this.front;

      while(tmp) {
        tmpArr.push(tmp.value);
        tmp = tmp.next;
      }

      console.log(tmpArr.join(','));
    }

  }

}



let q = new Queue();
/*q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.print();*/
q.dequeue();
q.print();