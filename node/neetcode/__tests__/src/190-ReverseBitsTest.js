const _190_ReverseBits = require("../../src/190-ReverseBits")
// @ponicode
describe("_190_ReverseBits", () => {
    test("0", () => {
        let result = _190_ReverseBits(0b00000010100101000001111010011100)
        expect(result).toBe(0b00111001011110000010100101000000)
    })

    test("1", () => {
        let result = _190_ReverseBits(0b11111111111111111111111111111101)
        expect(result).toBe(0b10111111111111111111111111111111)
    })

})
