const chai = require('chai');
const expect = chai.expect;

const { hasLoop } = require('../../src/LinkedLists/LoopDetection');
const { LinkedList, Node} = require('../../src/LinkedLists/LinkedList');

describe.skip("Linked List - is there intersection?", function() {
  let ll;

  beforeEach(function() {
    ll = new LinkedList();
  });

  it("A loop is detected", function() {
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

  it("A loop is NOT detected", function() {
    ll.convertArrayToLinkedList(['A', 'B', 'C', 'D', 'E']);

    const expected = null;

    const res = hasLoop(ll.head);
    expect(res).to.deep.equal(expected);
  });



});
