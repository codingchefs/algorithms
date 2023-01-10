const _121_MaxProfit = require("../../../src/SlidingWindow/121-MaxProfit")
// @ponicode
describe("_121_MaxProfit", () => {
  test("0", () => {
    let result = _121_MaxProfit([7, 1, 5, 3, 6, 4])
    expect(result).toBe(5)
  })

  test("1", () => {
    let result = _121_MaxProfit([7, 6, 4, 3, 1])
    expect(result).toBe(0)
  })

})
