const chai = require('chai');
const expect = chai.expect;

const isPalindrome = require('../../src/LinkedLists/Palindrome');
const { LinkedList } = require('../../src/LinkedLists/LinkedList');

describe("Linked List - is Palindrome?", function() {
  let ll;

  beforeEach(function() {
    ll = new LinkedList();
  });

  it("Returns `true` for 0 -> 1 -> 2 -> 1 -> 0 is a palindrome", function() {
    ll.convertArrayToLinkedList([0, 1, 2, 1, 0]);

    const expected = true;

    const res = isPalindrome(ll.head);
    expect(res).to.deep.equal(expected);
  });

  it("Returns `true` for 0 -> 1 -> 1 -> 0 is a palindrome", function() {
    ll.convertArrayToLinkedList([0, 1, 1, 0]);

    const expected = true;

    const res = isPalindrome(ll.head);
    expect(res).to.deep.equal(expected);
  });

  it("Returns `false` for 0 -> 1 -> 2 -> 1 is a palindrome", function() {
    ll.convertArrayToLinkedList([0, 1, 2, 1]);

    const expected = false;

    const res = isPalindrome(ll.head);
    expect(res).to.deep.equal(expected);
  });

});
