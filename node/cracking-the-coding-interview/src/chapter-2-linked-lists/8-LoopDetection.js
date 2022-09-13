/**
 * Loop Detection: Given a circular linked list, implement an algorithm that returns the node
 * at the beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node,
 * so as to make a loop in the linked list.
 *
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier) Output: C
 * Solution: Use a slow pointer and a fast pointer that moves 2x speed. check while fast.next is null, if slow and fast
 * pointer becomes equal, then a loop exists
 * @param head
 */
const hasLoop = (head) => {

  if (!head) return false;
  // initialize slow and fast
  let slow = head;
  let fast = head;

  // iterate while fast next exists
  while (fast && fast.next) {
    // move fast and slow pointers
    slow = slow.next;
    fast = fast.next.next;
    // check if slow and fast becomes equal
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

module.exports = hasLoop;
