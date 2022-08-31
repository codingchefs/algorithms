const chai = require('chai');
const expect = chai.expect;

const StackMin = require('../../src/chapter-3-stacks-and-queues/2-StackMin');

describe("Stack - StackMin", () => {

  it("tests push and pop", function() {
    const stack = new StackMin();

    stack.push(5);
    expect(stack.min()).to.equal(5);

    stack.push(6);
    expect(stack.min()).to.equal(5);

    stack.push(3);
    expect(stack.min()).to.equal(3);

    stack.push(7);
    expect(stack.min()).to.equal(3);

    expect(stack.pop()).to.equal(7);
    expect(stack.min()).to.equal(3);

    expect(stack.pop()).to.equal(3);
    expect(stack.min()).to.equal(5);
  });

});
