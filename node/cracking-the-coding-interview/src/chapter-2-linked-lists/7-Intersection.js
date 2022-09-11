/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on reference, not value.
 * That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node
 * of the second linked list, then they are intersecting.
 * example: 3 -> 1 -> 5 -> 9 -> (7) -> 2 -> 1
 *                    4 -> 6 -> (7) -> 2 -> 1
 * Solution: loop through listA and listB at the same time, if listA exhausts, point pointer_a to list b, and if listB
 * exhausts, point pointer_b to list a. In the second loop when both lists start from same length, compare both pointers
 * to see if they are equal and return.
 * @param headA
 * @param headB
 * @returns {null|*}
 */
const getIntersection = (headA, headB) => {
  // check for null list
  if (!headA || !headB) return null;
  // initialize pointer_a and pointer_b
  let a_pointer = headA;
  let b_pointer = headB;
  // iterate through the lists to see if both are equal
  while (JSON.stringify(a_pointer) !== JSON.stringify(b_pointer)) {
    // if pointer_a is null, point to headB
    if (!a_pointer) {
      a_pointer = headB;
    } else {
      // else move to next node
      a_pointer = a_pointer.next;
    }

    // if pointer_b is null, point to headA
    if (!b_pointer) {
      b_pointer = headA;
    } else {
      // else move to next node
      b_pointer = b_pointer.next;
    }
  }

  return a_pointer;
};

module.exports = getIntersection;

