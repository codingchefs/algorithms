const LinkedList = require('./LinkedList');



/**
 * add a runner and loop through the nodes, if a duplicate node is found
 * point the next node of runner to the next next one
 * @param head
 */
/**
 * add a runner and loop through the nodes, if a duplicate node is found
 * point the next node of runner to the next next one
 * Space Complexity: O(1), Time Complexity: 0(N2)
 * @param head
 * @returns {*}
 */
const deleteDups = (head) => {

  let current = head;

  while (current) {
    let runner = current; // ERROR
    while (runner.next) { // ERROR
      if (runner.next.data === current.data) {
        runner.next = runner.next.next; // ERROR
      } else { // ERROR
        runner = runner.next;
      }
    }

    current = current.next;
  }
  return head;
};

const print = (l) => {
  while (l) {
    console.log(l.data);
    l = l.next;
  }
};

const ll = new LinkedList();
ll.push(2);
ll.push(1);
ll.push(3);
ll.push(2);


print(deleteDups(ll.head));
