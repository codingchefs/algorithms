/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 * example: 0 -> 1 -> 2 -> 1 -> 0
 * result: true
 *
 * SOLUTION:
 * declare a variable fast and slow to find the mid point of the linked list.
 * reverse the slow list and compare to left side to see if they are equal
 * if they are equal, then it is a palindrome
 *
 * @param head
 * @returns {boolean}
 */
const isPalindrome = (head) => {
  // define slow variable and fast variable
  let slow = head;
  let fast = head;

  // loop through head and increment fast double than slow
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // get reverse of slow
  slow = reversed(slow);

  // reset fast to head (left half of the list)
  fast = head;

  // iterate through reversed slow (right half) list and compare to left half (fast)
  while (slow) {
    if (slow.data !== fast.data) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;

};

/**
 * reverses the linked list
 * example: head: 2 -> 1 -> 0
 * result: 0 -> 1 -> 2
 *
 * @param head
 * @returns {null}
 */
//
const reversed = (head) => {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

module.exports = isPalindrome;
