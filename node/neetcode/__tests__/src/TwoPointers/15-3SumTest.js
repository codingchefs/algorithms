const _15_3Sum = require("../../../src/TwoPointers/15-3Sum")
// @ponicode
describe("_15_3Sum", () => {
  test("0", () => {
    let result = _15_3Sum([-1, 0, 1, 2, -1, -4])
    expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]])
  })

  test("1", () => {
    let result = _15_3Sum([0, 1, 1])
    expect(result).toEqual([])
  })

  test("2", () => {
    let result = _15_3Sum([0, 0, 0])
    expect(result).toEqual([[0, 0, 0]])
  })

  test("3", () => {
    let result = _15_3Sum([-2, -2, 0, 0, 2, 2])
    expect(result).toEqual([[-2, 0, 2]])
  })

  test("4", () => {
    let result = _15_3Sum([-1,0,1,2,-1,-4,-2,-3,3,0,4])
    expect(result).toEqual([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]])
  })

})
