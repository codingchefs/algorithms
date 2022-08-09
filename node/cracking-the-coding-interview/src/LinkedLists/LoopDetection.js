/**
 * Loop Detection: Given a circular linked list, implement an algorithm that returns the node
 * at the beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node,
 * so as to make a loop in the linked list.
 *
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier) Output: C

 * @param head
 */
const hasLoop = (head) => {

  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while(slow !== fast){
    if(!fast || !fast.next) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

const hasCycle=function(node){
  const head =  node;
  let track=node;
  //traverse thru list till next node is either null or back to first node
  while(track.next!==null && track.next!== head){
    track=track.next;
  }
  if(track.next === null){ //if next node null then no cycle
    return false;
  }
  if(track.next===head){ //if next node head then there is cycle
    return true;
  }
};

module.exports = {
  hasLoop,
  hasCycle,
};
