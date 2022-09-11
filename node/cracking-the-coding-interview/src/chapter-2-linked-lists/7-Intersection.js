/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on reference, not value.
 * That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node
 * of the second linked list, then they are intersecting.
 * example: 3 -> 1 -> 5 -> 9 -> (7) -> 2 -> 1
 *                    4 -> 6 -> (7) -> 2 -> 1
 * Solution:
 * @param headA
 * @param headB
 * @returns {null|*}
 */
const getIntersection = (headA, headB) => {
  if (!headA || !headB) return null;

  let a_pointer = headA;
  let b_pointer = headB;
  while (JSON.stringify(a_pointer) !== JSON.stringify(b_pointer)) {
    if (!a_pointer) {
      a_pointer = headB;
    } else {
      a_pointer = a_pointer.next;
    }

    if (!b_pointer) {
      b_pointer = headA;
    } else {
      b_pointer = b_pointer.next;
    }
  }

  return a_pointer;
};

module.exports = getIntersection;

