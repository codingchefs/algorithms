const chai = require('chai');
const expect = chai.expect;

const {AnimalQueue, Cat, Dog } = require('../../src/chapter-3-stacks-and-queues/6-AnimalShelter');

describe("Stack - AnimalShelter", () => {

  it("tests enqueue", function () {
    const shelter = new AnimalQueue();
    shelter.enqueue(new Cat("Hanzack"))
    shelter.enqueue(new Dog("Pluto"))
    shelter.enqueue(new Cat("Garfield"))
    shelter.enqueue(new Cat("Tony"))
    shelter.enqueue(new Dog("Clifford"))
    shelter.enqueue(new Dog("Blue"))
    expect(shelter.dequeueAny().data._name).to.equal('Hanzack');
    expect(shelter.dequeueAny().data._name).to.equal('Garfield');
    expect(shelter.dequeueDogs().data._name).to.equal('Pluto');
    expect(shelter.dequeueDogs().data._name).to.equal('Clifford');
    expect(shelter.dequeueCats().data._name).to.equal('Tony');
    expect(shelter.dequeueCats()).to.equal('None');
    expect(shelter.dequeueAny().data._name).to.equal('Blue');
    expect(shelter.dequeueAny()).to.equal('None');
  });

});







