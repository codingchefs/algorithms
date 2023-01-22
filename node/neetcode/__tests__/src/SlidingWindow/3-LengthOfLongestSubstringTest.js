const _3_LengthOfLongestSubstring = require("../../../src/SlidingWindow/3-LengthOfLongestSubstring")
// @ponicode
describe("_3_LengthOfLongestSubstring", () => {
    test("0", () => {
        let result = _3_LengthOfLongestSubstring("abcabcbb")
        expect(result).toEqual(3)
    })

    test("1", () => {
        let result = _3_LengthOfLongestSubstring("bbbbb")
        expect(result).toEqual(1)
    })

    test("2", () => {
        let result = _3_LengthOfLongestSubstring("pwwkew")
        expect(result).toEqual(3)
    })

})
