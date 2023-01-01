const _322_CoinChange = require("../../src/322-CoinChange")
// @ponicode
describe("_322_CoinChange", () => {
    test("0", () => {
        let param1 = [1, 2, 5];
        let result = _322_CoinChange(param1, 11)
        expect(result).toBe(3)
    })

    test("1", () => {
        let param1 = [2];
        let result = _322_CoinChange(param1, 3)
        expect(result).toBe(-1)
    })

    test("2", () => {
        let param1 = [1];
        let result = _322_CoinChange(param1, 0)
        expect(result).toBe(0)
    })

})
