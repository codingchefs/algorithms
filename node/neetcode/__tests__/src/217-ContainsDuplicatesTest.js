const _217_ContainsDuplicates = require("../../src/217-ContainsDuplicates")
// @ponicode
describe("_217_ContainsDuplicates", () => {

    test("0", () => {
        let result = _217_ContainsDuplicates([1, 2, 3, 1])
        expect(result).toBeTruthy()
    })

    test("1", () => {
        let result = _217_ContainsDuplicates([1, 2, 3, 4])
        expect(result).toBeFalsy()
    })

    test("2", () => {
        let result = _217_ContainsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
        expect(result).toBeTruthy()
    })

})
