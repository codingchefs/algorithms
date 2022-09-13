const chai = require('chai');
const expect = chai.expect;

const hasLoop = require('../../src/chapter-2-linked-lists/8-LoopDetection');
const { LinkedList, Node} = require('../../src/chapter-2-linked-lists/LinkedList');

describe("Linked List - is there intersection?", function() {
  let ll;

  beforeEach(function() {
    ll = new LinkedList();
  });

  it("returns null if no linked list provided", function() {
    const res = hasLoop();
    expect(res).to.deep.equal(false);
  });

  it("returns false if a loop is NOT detected", function() {
    ll.convertArrayToLinkedList(['A', 'B', 'C', 'D', 'E']);

    const res = hasLoop(ll.head);
    expect(res).to.deep.equal(false);
  });

  it("returns true if a loop is detected", function() {
    let my_node1=new Node('A');
    let my_node2=new Node('B');
    let my_node3=new Node('C');
    let my_node4=new Node('D');
    let my_node5=new Node('E');

   //connecting linked list
    my_node1.next=my_node2;
    my_node2.next=my_node3;
    my_node3.next=my_node4;
    my_node4.next=my_node5;
    my_node5.next=my_node3; //cycle

    const expected = new LinkedList();
    expected.convertArrayToLinkedList(['A', 'B', 'C', 'D', 'E', 'C']);

    const res = hasLoop(my_node1);
    expect(res).to.deep.equal(true);
  });

});
