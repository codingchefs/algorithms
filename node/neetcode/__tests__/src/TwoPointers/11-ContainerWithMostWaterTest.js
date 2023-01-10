const _11_ContainerWithMostWater = require("../../../src/TwoPointers/11-ContainerWithMostWater")
// @ponicode
describe("_11_ContainerWithMostWater", () => {
  test("0", () => {
    let result = _11_ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])
    expect(result).toBe(49)
  })

  test("1", () => {
    let result = _11_ContainerWithMostWater([1, 1])
    expect(result).toBe(1)
  })
})
