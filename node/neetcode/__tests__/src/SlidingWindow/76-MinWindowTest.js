const _76_MinWindow = require("../../../src/SlidingWindow/76-MinWindow")
// @ponicode
describe("_76_MinWindow", () => {
    test("0", () => {
        let result = _76_MinWindow("ADOBECODEBANC", "ABC")
        expect(result).toEqual("BANC")
    })

    test("1", () => {
        let result = _76_MinWindow("a", "a")
        expect(result).toEqual("a")
    })

    test("2", () => {
        let result = _76_MinWindow("a", "aa")
        expect(result).toEqual("")
    })

})
