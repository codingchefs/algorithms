const chai = require('chai');
const expect = chai.expect;

const binarySearch = require('../../search/binary');

describe("binarySearch", function() {

    const arrayToSearch1 = [1, 2, 3, 4, 5];
    const arrayToSearch2 = [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ];

    it("Returns correct position when value found in array`", () => {
        let result = binarySearch(arrayToSearch1, 2);
        expect(result).to.eql(1);

        result = binarySearch(arrayToSearch1, 3);
        expect(result).to.eql(2);

        result = binarySearch(arrayToSearch1, 5);
        expect(result).to.eql(4);

        result = binarySearch(arrayToSearch2, 10);
        expect(result).to.eql(2);

        result = binarySearch(arrayToSearch2, 95);
        expect(result).to.eql(16);
    });

    it("Returns `-1` when value not found in array", () => {
        let result = binarySearch(arrayToSearch1, 6);
        expect(result).to.eql(-1);
        result = binarySearch(arrayToSearch2, 100);
        expect(result).to.eql(-1);
    });

});
