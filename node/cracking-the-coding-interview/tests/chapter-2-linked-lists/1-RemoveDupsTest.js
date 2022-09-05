const chai = require('chai');
const expect = chai.expect;

const { LinkedList } = require('../../src/chapter-2-linked-lists/LinkedList');
const deleteDups = require('../../src/chapter-2-linked-lists/1-RemoveDups');

describe("Linked List - Remove Duplicates", () => {

  it("Given a list with duplicates, returns a list with no duplicates", function() {
    const ll = new LinkedList();
    ll.push(2);
    ll.push(1);
    ll.push(3);
    ll.push(2);


    const res = deleteDups(ll.head);
    expect(res).to.equal(true);
    expect(ll.head.next.next.next).to.equal(null);
  });

});

