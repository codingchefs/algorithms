const _338_CountingBits = require("../../src/338-CountingBits")
// @ponicode
describe("_338_CountingBits", () => {
    test("0", () => {
        let result = _338_CountingBits(2)
        expect(result).toEqual([0, 1, 1])
    })

    test("1", () => {
        let result = _338_CountingBits(5)
        expect(result).toEqual([0,1,1,2,1,2])
    })

})
