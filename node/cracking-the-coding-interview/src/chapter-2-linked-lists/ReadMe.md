# Linked Lists

## Linked Lists
* linked list is a data structure that represents a sequence of nodes.
* In a singly linked list, each node points to the next node in the linked list. 
* A doubly linked list gives each node pointers to both the next node and the previous node.
* The benefit of a linked list is that you can add and remove items from the beginning of the list in constant time.
* Unlike Array, linked list does not provide constant time access to a particular index within the list.

Example: 1 -> 5 -> 2 -> 13 -> 7 -> 3

## Runner Technique
The runner technique means that you iterate through the linked list with two pointers simultaneously, with one ahead of
the other.

### General operations
* pop - Remove the top item from the stack
* push(item) - Add an item to the top of the stack
* peek() - Return the top of the stack
* isEmpty() - Return true if and only if the stack is empty

### Time complexity
* Insert, Search and Delete will have time complexity of O(n).
* Adding/Removing to the start of the list is O(1).

### Implementation

We start by constructing the root or head element.

```javascript
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
```

sdds
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

