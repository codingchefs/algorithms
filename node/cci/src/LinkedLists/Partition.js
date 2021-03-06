const LinkedList = require('./LinkedList');
/**
 * Partition: Write code to partition a linked list around a value x,
 * such that all nodes less than x come before all nodes greater than or equal to x.
 * If x is contained within the list, the values of x only need to be after the elements less than x
 * (see below). The partition element x can appear anywhere in the "right partition";
 * it does not need to appear between the left and right partitions.
 *
 * EXAMPLE
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
 * Output: 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10
 * @param node - linked list head
 * @param x - partition element
 */

/*
 * SOLUTION:
 * This seems easy to understand.
 * before_head maintains the pointer to start of list
 * before is used to iterate to next nodes
 * after_head maintains the pointer to start of list
 * after is used to iterate to next nodes
 * value less than x is moved to `before` list and
 * value greater or equal to x is moved to `after` list
 * Towards the end, the before.next is pointed to after_head.next and
 * before_head.next is returned
 *
 * @param node
 * @param x - number to partition by
 * @returns {*|null}
 */
const partition = (node, x) => {
    let before_head = new LinkedList();
    let before = before_head;

    let after_head = new LinkedList();
    let after = after_head;

    while(node) {
      if(node.data < x) {
        // add to before list
        before.next = node;
        before = before.next;
      } else {
        // add to after list
        after.next = node;
        after = after.next;
      }

      node = node.next;
    }

    after.next = undefined;
    // connect after list to before list at the end
    before.next = after_head.next;

    return before_head.next;
};

/**
 * alternate solution without 4 variables
 * @param node
 * @param x
 * @returns {*}
 */
const partition2 = (node, x) => {
  let beforeStart;
  let beforeEnd = null;
  let afterStart;
  let afterEnd = null;

  while (node) {
    const next = node.next;
    node.next = null;
    if (node.data < x) {
      if (!beforeStart) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if (!afterStart) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = next;
  }

  if (!beforeStart) {
    return afterStart;
  }

  beforeEnd.next = afterStart;
  return beforeStart;
};

const partition3 = (node, x) => {
  let head = node;
  let tail = node;

  while (node) {
    let next = node.next;
    if (node.data < x) {
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;
  return head;
};

module.exports = {
  partition,
};
