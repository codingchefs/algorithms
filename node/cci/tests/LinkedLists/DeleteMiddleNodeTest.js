const chai = require('chai');
const expect = chai.expect;

const deleteMiddleNode = require('../../src/LinkedLists/DeleteMiddleNode');
const LinkedList = require('../../src/LinkedLists/LinkedList');

describe.skip("Linked List - Delete Middle Node", function() {
  let ll;

  beforeEach(function() {
    ll = new LinkedList();
    ll.push('a');
    ll.push('b');
    ll.push('c');
    ll.push('d');
    ll.push('e');
    ll.push('f');
  });

  it("Returns true if `c` element is deleted", function() {
    const res = deleteMiddleNode(ll.head.next.next);
    expect(res).to.equal(true);
    expect(ll.head.next.next.data).to.equal('d');
  });

  it("Returns false if `f` element is deleted", function() {
    const res = deleteMiddleNode(ll.head.next.next.next.next.next);
    expect(res).to.equal(false);
    expect(ll.head.next.next.next.next.next.data).to.equal('f');
  });

  it("Returns false if empty linked list is passed", function() {
    const emptyLL = new LinkedList();
    const res = deleteMiddleNode(emptyLL);
    expect(res).to.equal(false);
  });

});
