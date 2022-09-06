/**
 * Delete Middle Node: Implement an algorithm to delete a node in the middle
 * (ie., any node but the first and last node, not necessarily the exact middle) of a singly linked list,
 * given only access to that node.

 * EXAMPLE:
 * Input: the node c from the linked list a->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 * Solution: Copy the data from the next node over to the current node, and then to delete the next node.
 * @param n - Node from linked list
 */
const deleteMiddleNode = (n) => {
  if(!n || !n.next) return false;

  let nextNode = n.next;
  // copy data of next element
  n.data = nextNode.data;
  n.next = nextNode.next;
  return true;
};

module.exports = deleteMiddleNode;
