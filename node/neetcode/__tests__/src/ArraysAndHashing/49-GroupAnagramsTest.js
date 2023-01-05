const _49_GroupAnagrams = require("../../../src/ArraysAndHashing/49-GroupAnagrams")
// @ponicode
describe("_49_GroupAnagrams", () => {
    test("0", () => {
        const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
        const output = [["eat", "tea", "ate"], ["tan", "nat"], ['bat']];

        let result = _49_GroupAnagrams(strs)
        expect(result).toEqual(output);
    })

    test("1", () => {
        const strs = [""]
        const output = [[""]];

        let result = _49_GroupAnagrams(strs)
        expect(result).toEqual(output);
    })

    test("2", () => {
        const strs = ["a"]
        const output = [["a"]];

        let result = _49_GroupAnagrams(strs)
        expect(result).toEqual(output);
    })
})
