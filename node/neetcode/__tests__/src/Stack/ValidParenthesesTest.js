const ValidParentheses = require("../../../src/Stack/ValidParentheses")
// @ponicode
describe("ValidParentheses", () => {
    test("0", () => {
        let result = ValidParentheses("()")
        expect(result).toBeTruthy()
    })

    test("1", () => {
        let result = ValidParentheses("()[]{}")
        expect(result).toBeTruthy()
    })

    test("2", () => {
        let result = ValidParentheses("(]")
        expect(result).toBeFalsy()
    })

})
