const _75_MissingNumber = require("../../src/75-MissingNumber")
// @ponicode
describe("_75_MissingNumber", () => {
    test("0", () => {
        let result = _75_MissingNumber([3, 0, 1])
        expect(result).toBe(2)
    })

    test("1", () => {
        let result = _75_MissingNumber([0, 1])
        expect(result).toBe(2)
    })

    test("2", () => {
        let result = _75_MissingNumber([9,6,4,2,3,5,7,0,1])
        expect(result).toBe(8)
    })

})
