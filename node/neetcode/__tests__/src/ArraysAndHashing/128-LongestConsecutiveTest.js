const _128_LongestConsecutive = require("../../../src/ArraysAndHashing/128-LongestConsecutive")
// @ponicode
describe("_128_LongestConsecutive", () => {
    test("0", () => {
        let result = _128_LongestConsecutive([100,4,200,1,3,2])
        expect(result).toEqual(4);
    })

    test("1", () => {
        let result = _128_LongestConsecutive([0,3,7,2,5,8,4,6,0,1])
        expect(result).toEqual(9);
    })

})
