const chai = require('chai');
const expect = chai.expect;

const Stack = require('../../src/chapter-3-stacks-and-queues/Stack');

describe("Stack - Test Methods", function() {

  beforeEach(function() {

  });

  it("tests push and pop", function() {
    const stack = new Stack();

    expect(stack.pop()).to.equal('Underflow');
    expect(stack.isEmpty()).to.be.true;

    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.push(60);
    stack.print();

    expect(stack.size()).to.equal(6);

    expect(stack.peek()).to.equal(60);
    expect(stack.pop()).to.equal(60);

    expect(stack.peek()).to.equal(50);
    expect(stack.pop()).to.equal(50);

    expect(stack.size()).to.equal(4);

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.peek()).to.equal('No Elements in the Stack');
  });

});
