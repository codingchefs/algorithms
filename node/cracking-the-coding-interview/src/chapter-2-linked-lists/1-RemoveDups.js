/**
 * Write code to remove duplicates from an unsorted linked list.
 */

/**
 * add a runner and loop through the nodes, if a duplicate node is found
 * point the next node of runner to the next next one
 * Space Complexity: O(1),
 * Time Complexity: 0(N2)
 * example: 2 -> 1 -> 3 -> 2
 * @param head
 * @returns {*}
 */
const deleteDups = head => {
  // initialize current to head
  let current = head;
  // loop while current exists
  while (current) {
    // initialize a runner
    let runner = current;
    // loop through runner's next
    while (runner.next) {
      // check if runner next data is equal to current data
      if (runner.next.data === current.data) {
        // if yes, assign runner's next to runner's next next
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }

    }

    // move current to next
    current = current.next;
  }
  return head;

};

module.exports = deleteDups;