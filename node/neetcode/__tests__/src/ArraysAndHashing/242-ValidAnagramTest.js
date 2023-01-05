const _242_ValidAnagram = require("../../../src/ArraysAndHashing/242-ValidAnagram")
// @ponicode
describe("_242_ValidAnagram", () => {
    test("0", () => {
        let result = _242_ValidAnagram("car", "cart")
        expect(result).toBeFalsy()
    })

    test("1", () => {
        let result = _242_ValidAnagram("anagram", "nagaram")
        expect(result).toBeTruthy()
    })

    test("2", () => {
        let result = _242_ValidAnagram("rat", "car")
        expect(result).toBeFalsy()
    })

})
