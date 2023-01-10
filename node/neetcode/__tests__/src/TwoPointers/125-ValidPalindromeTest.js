const _125_ValidPalindrome = require("../../../src/TwoPointers/125-ValidPalindrome")
// @ponicode
describe("_125_ValidPalindrome", () => {
    test("0", () => {
        let result = _125_ValidPalindrome("A man, a plan, a canal: Panama")
        expect(result).toBeTruthy()
    })

    test("1", () => {
        let result = _125_ValidPalindrome("race a car")
        expect(result).toBeFalsy()
    })

    test("2", () => {
        let result = _125_ValidPalindrome(" ")
        expect(result).toBeTruthy()
    })

})
