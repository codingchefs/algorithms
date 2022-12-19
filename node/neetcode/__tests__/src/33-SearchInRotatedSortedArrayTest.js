const _33_SearchInRotatedSortedArray = require("../../src/33-SearchInRotatedSortedArray")
// @ponicode
describe("_33_SearchInRotatedSortedArray", () => {
    test("0", () => {
        let result = _33_SearchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)
        expect(result).toBe(4);
    })

    test("1", () => {
        let result = _33_SearchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)
        expect(result).toBe(-1);
    })

    test("2", () => {
        let result = _33_SearchInRotatedSortedArray([1], 0)
        expect(result).toBe(-1);
    })
})
