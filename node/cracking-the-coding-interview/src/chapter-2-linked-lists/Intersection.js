/**
 *
 * @param ll1
 * @param ll2
 * @returns {null|*}
 */
const findIntersection = (ll1, ll2) => {
  let ll1Map = {};

  while(ll1) {
    ll1Map[ll1.data] = true;
    ll1 = ll1.next;
  }

  while(ll2) {
    if(ll1Map[ll2.data]) {
      return ll2;
    }

    ll2 = ll2.next;
  }

  return null;
};

/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on reference, not value.
 * That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node
 * of the second linked list, then they are intersecting.
 * @param headA
 * @param headB
 * @returns {null|*}
 */
const getIntersection = (headA, headB) => {
  if (!headA || !headB) return null;

  let a_pointer = headA;
  let b_pointer = headB;
  // FIXME: on leetcode if you compare a_pointer == b_pointer, it passes
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

module.exports =  {
  findIntersection,
  getIntersection,
};
