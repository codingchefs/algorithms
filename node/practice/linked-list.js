const LinkedList = function () {
  this.head = null;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};


LinkedList.prototype.size = function () {
  var current = this.head;
  var count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

LinkedList.prototype.print = function (start) {
  let ptr = start;
  let count = 0;

  while (ptr !== null) {
    count++;
    console.log(ptr.data);
    ptr = ptr.next;
  }
  console.log(`Node count=${count}`);
};

LinkedList.prototype.findMaxMin = function (start) {
  let ptr = start;
  let max = 0;
  let min = 0;
  let flag = 1;
  while (ptr !== null) {
    if (flag == 1) {
      min = ptr.data;
      max = ptr.data;
      flag = 0;
    } else {
      if (ptr.data > max) {
        max = ptr.data;
      }

      if (ptr.data < min) {
        min = ptr.data;
      }
    }
    ptr = ptr.next;
  }

  console.log(`Minimum: ${min}, Maximum: ${max}`);
};


LinkedList.prototype.unsortedSearch = function (start, item) {
  let ptr = start;
  while(ptr !== null && ptr.data !== item) {
    ptr = ptr.next;
  }

  if(ptr === null) {
    console.log(`${item} NOT found`);
  } else {
    console.log(`${item} found`);
  }
};

LinkedList.prototype.sortedSearch = function (start, item) {
  let ptr = start;
  while(ptr !== null && ptr.data > item) {
    ptr = ptr.next;
  }

  if(ptr.data === item) {
    console.log(`${item} found`);
  } else {
    console.log(`${item} NOT found`);
  }
};

LinkedList.prototype.insertFirstNode = function (val) {
  var newNode = {
    data: val,
    next: this.head
  };

  this.head = newNode;
};


LinkedList.prototype.insertNewNodeAfterSearchNode = function (start, newInfo, searchInfo) {
  let ptr = start;
  while(ptr!== null && ptr.data !== searchInfo) {
    ptr = ptr.next;
  }

  if(ptr === null) {
    console.log(`${searchInfo} not found`);
  } else  {
    let newNode = {
      data: newInfo,
      next: ptr.next,
    };

    ptr.next = newNode;
  }
};

LinkedList.prototype.deleteAfterSearchNode = function (searchInfo) {
  if(this.head === null) {
    console.log("underflow");
    return;
  }
  if(this.head.data === searchInfo) {
    this.head = this.head.next;
    return;
  } else {
    let prevPtr = this.head;
    let ptr = this.head.next;
    while(ptr !== null && ptr.data !== searchInfo) {
      prevPtr = ptr;
      ptr = ptr.next;
    }

    if(ptr === null) {
      console.log(`${searchInfo} NOT found`);
    } else {
      prevPtr.next = ptr.next;
    }
  }

};

LinkedList.prototype.reverse = function () {
  let ptr = this.head;
  let nextPtr = null;
  let prevPtr = null;

  while(ptr !=null) {
    prevPtr = nextPtr;
    nextPtr = ptr;
    ptr = ptr.next;
    nextPtr.next = prevPtr;
  }

  this.head = nextPtr;
};

// 68 -> prePtr 71 -> ptr 69 -> 70 -> ...
const list = new LinkedList();
list.insertFirstNode(10);
list.insertFirstNode(30);
list.insertFirstNode(20);
list.insertFirstNode(50);
list.insertFirstNode(40);
list.insertFirstNode(5);
list.insertFirstNode(70);
list.insertFirstNode(69);
list.insertFirstNode(71);
list.insertFirstNode(68);


// list.findMaxMin(list.head);
// list.unsortedSearch(list.head, 68);
// list.sortedSearch(list.head, 51);
// list.insertNewNodeAfterSearchNode(list.head, 25, 20);
// list.deleteAfterSearchNode(40)
list.reverse();

list.print(list.head);
// console.log(list);