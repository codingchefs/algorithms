class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  enqueue(element) {
    if(this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for(let i=0; i < this.collection.length; i++) {
        const priorityOfNewEle = element[1];
        const priorityOfCurrEle = this.collection[i][1];
        if(priorityOfNewEle < priorityOfCurrEle) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if(!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    if(this.isEmpty()) {
      console.log("UNDERFLOW ERROR")
      return;
    } else {
      return this.collection.shift();
    }
  }

  print() {
    // if the queue is empty
    console.log(this.collection);
  }

}



let pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska', 1]);
pq.enqueue(['Briana Swift', 2]);
pq.print();
pq.dequeue();
pq.print();