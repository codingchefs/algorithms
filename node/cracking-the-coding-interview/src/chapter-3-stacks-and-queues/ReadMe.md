# Stacks & Queues

## Stack
A stack uses LIFO (last-in first-out) ordering.

### General operations
* pop - Remove the top item from the stack
* push(item) - Add an item to the top of the stack
* peek() - Return the top of the stack
* isEmpty() - Return true if and only if the stack is empty

### Time complexity
* constant time adds and removes

### Implementation
```javascript
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
}

```

### Use cases
* used in certain recursive algorithms where you backtrack

## Queue

A queue implements FIFO (first-in first-out) ordering. As in a line or queue at a ticket stand, items are removed from 
the data structure in the same order that they are added.

### General operations
* add(item) - Add an item to the end of the list. 
* remove() - remove the first item in the list.
* peek() - return the top of the queue.
* isEmpty() - Return true if anf only if the queue is empty.

### Time complexity
* O(1) adding 
* O(n) worst case for removals

### Implementation
#### General Implementation
```javascript

```
#### Linked list Implementation
```javascript

```