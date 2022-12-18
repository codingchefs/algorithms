const _153_FindMin = require("../../src/153-FindMin")
// @ponicode
describe("_153_FindMin", () => {

    test("0", () => {
        let result = _153_FindMin([3,4,5,1,2])
        expect(result).toBe(1)
    })

    test("1", () => {
        let result = _153_FindMin([4,5,6,7,0,1,2])
        expect(result).toBe(0)
    })

    test("2", () => {
        let result = _153_FindMin([11,13,15,17])
        expect(result).toBe(11)
    })

    test("3", () => {
        let result = _153_FindMin([1, -5.48, -5.48, 100])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _153_FindMin([-5.48, 1, -5.48, 1])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _153_FindMin([])
        expect(result).toMatchSnapshot()
    })
})
