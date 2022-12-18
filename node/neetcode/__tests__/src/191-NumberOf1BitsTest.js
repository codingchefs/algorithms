const _191_NumberOf1Bits = require("../../src/191-NumberOf1Bits")
// @ponicode
describe("_191_NumberOf1Bits", () => {
    test("0", () => {
        let result = _191_NumberOf1Bits(0b00000000000000000000000000001011)
        expect(result).toBe(3)
    })

    test("1", () => {
        let result = _191_NumberOf1Bits(0b00000000000000000000000010000000)
        expect(result).toBe(1)
    })

    test("2", () => {
        let result = _191_NumberOf1Bits(0b11111111111111111111111111111101)
        expect(result).toBe(31)
    })

})
