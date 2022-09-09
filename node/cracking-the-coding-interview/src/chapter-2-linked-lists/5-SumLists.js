const { Node } = require('./LinkedList');

/**
 * Sum Lists: You have two numbers represented by a linked list,
 * where each node contains a single digit. The digits are stored in reverse order,
 * such that the 1's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list.
 *
 * EXAMPLE
 * Input: (7-> 1 -> 6) + (5 -> 9 -> 2) .That is 617 + 295. Output: 2 -> 1 -> 9. That is 912.
 * FOLLOW UP
 * Suppose the digits are stored in forward order.
 * Repeat the above problem.
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is 617 + 295. Output:9 -> 1 -> 2. That is 912.
 *
 * SOLUTION:
 * add the two numbers and save the last digit as new node and store the carry over to add in
 * next iteration. Once the linked list is exhausted, check if carry over exists and add to the sum
 *
 * @param l1 - linked list 1
 * @param l2 - linked list 2
 * @returns head to result linked list
 */
const addLists = (l1, l2) => {
  // first define a empty node and a iterator to it
  const result = new Node();
  let result_iter = result
  let carry = 0;

  while(l1 || l2) {
    // get the sum of values of l1 and l2 nodes
    const l1_val = l1?.data || 0;
    const l2_val = l2?.data || 0;

    const sum = l1_val + l2_val + carry;

    // find last digit and carry
    carry = Math.floor(sum / 10);

    const last_digit = sum % 10;
    const new_node = new Node(last_digit)
    result_iter.next = new_node;

    // go to next iterator `if exists`
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    result_iter = result_iter.next;
  }
  // add a new node for carry over if any left
  if(carry > 0){
    const new_node= new Node(carry);
    result_iter.next = new_node;
  }

  return result.next;
};

module.exports = {
  addLists,
};
