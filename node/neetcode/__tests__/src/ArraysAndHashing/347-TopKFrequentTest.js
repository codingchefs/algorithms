const TopKFrequent = require("../../../src/ArraysAndHashing/347-TopKFrequent")
// @ponicode
describe("347-TopKFrequent", () => {
    test("0", () => {
        let result = TopKFrequent([1,1,1,2,2,3], 2)
        expect(result).toEqual([2,1]);
    })

    test("1", () => {
        let result = TopKFrequent([1], 1)
        expect(result).toEqual([1]);
    })

})
