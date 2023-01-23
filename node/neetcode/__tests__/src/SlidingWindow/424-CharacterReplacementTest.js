const _424_CharacterReplacement = require("../../../src/SlidingWindow/424-CharacterReplacement")
// @ponicode
describe("_424_CharacterReplacement", () => {
    test("0", () => {
        let result = _424_CharacterReplacement("ABAB", 2)
        expect(result).toBe(4)
    })

    test("1", () => {
        let result = _424_CharacterReplacement("AABABBA", 1)
        expect(result).toBe(4)
    })

})
