const chai = require('chai');
const expect = chai.expect;

const naiveSearch = require('../../search/naiveSearch');

describe("naiveSearch", function() {

    it("Returns count of occurences when short string is found in long string`", () => {
        let result = naiveSearch("lorie loled", "lol");
        expect(result).to.eql(1);

        // result at start
        result = naiveSearch("lolie lored", "lol");
        expect(result).to.eql(1);

        // result at end
        result = naiveSearch("lorie loledlol", "lol");
        expect(result).to.eql(2);

        result = naiveSearch("lorie loledlol", "lol");
        expect(result).to.eql(2);
    });

    it("Returns `0` when short string not found in long string", () => {
        const result = naiveSearch("lorie loed", "lol");
        expect(result).to.eql(0);
    });

});
