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

  // initialize slow and fast pointer
  let slow_pointer = head;
  let fast_pointer = head;

  // loop till fast next is null
  while (fast_pointer && fast_pointer.next) {
    // move slow and fast pointers
    slow_pointer = slow_pointer.next;
    fast_pointer = fast_pointer.next.next;

    if (slow_pointer === fast_pointer) {
      return true;
    }
  }

  return false;
};

module.exports = hasLoop;
