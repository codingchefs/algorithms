const _238_ProductExceptSelf = require("../../../src/ArraysAndHashing/238-ProductExceptSelf")
// @ponicode
describe("_238_ProductExceptSelf", () => {
    
    test("0", () => {
        let result = _238_ProductExceptSelf([1, 2, 3, 4])
        expect(result).toEqual([24,12,8,6])
    })

    test("1", () => {
        let result = _238_ProductExceptSelf([-1,1,0,-3,3])
        expect(result).toEqual([0,0,9,0,0])
    })
})
