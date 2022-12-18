const _1_TwoSum = require("../../src/1-TwoSum")
// @ponicode
describe("_1_TwoSum", () => {
  test("0", () => {
    let result = _1_TwoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  })

  test("1", () => {
    let result = _1_TwoSum([3, 2, 4], 6)
    expect(result).toEqual([1, 2]);
  })

  test("2", () => {
    let result = _1_TwoSum([3, 3], 6)
    expect(result).toEqual([0, 1]);
  })

})
