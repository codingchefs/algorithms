const chai = require('chai');
const expect = chai.expect;

const StackOfPlates = require('../../src/chapter-3-stacks-and-queues/3-StackOfPlates');

describe("Stack - Stack of Plates", () => {

  it("tests push and pop", function () {
    const stack = new StackOfPlates(3);

    stack.push(5);
    stack.push(6);
    stack.push(3);
    expect(stack.stacks.length).to.equal(1);
    stack.push(7);
    expect(stack.stacks.length).to.equal(2);

    expect(stack.pop()).to.equal(7);
    expect(stack.pop()).to.equal(3);
  });

});
