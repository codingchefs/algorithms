const rewire = require("rewire")
const _125_ValidPalindrome = rewire("../../../src/TwoPointers/125-ValidPalindrome")
const _isAlphanumeric = _125_ValidPalindrome.__get__("_isAlphanumeric")
describe("_125_ValidPalindrome", () => {
    test("0", () => {
        let result = _125_ValidPalindrome("A man, a plan, a canal: Panama")
        expect(result).toBeTruthy()
    })

    test("1", () => {
        let result = _125_ValidPalindrome("race a car")
        expect(result).toBeFalsy()
    })

    test("2", () => {
        let result = _125_ValidPalindrome(" ")
        expect(result).toBeTruthy()
    })

    test("3", () => {
        let result = _125_ValidPalindrome("0P")
        expect(result).toBeFalsy()
    })

})

// @ponicode
describe("_isAlphanumeric", () => {
    test("0", () => {
        let result = _isAlphanumeric("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _isAlphanumeric("TestUpperCase@Example.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _isAlphanumeric("email@Google.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _isAlphanumeric("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _isAlphanumeric("something.example.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _isAlphanumeric("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_125_ValidPalindrome", () => {
    test("0", () => {
        let param1 = [{ toLowerCase: () => "Anas" }, { toLowerCase: () => "Edmond" }, { toLowerCase: () => "Jean-Philippe" }, { toLowerCase: () => "Edmond" }]
        let result = _125_ValidPalindrome(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1 = [{ toLowerCase: () => "Edmond" }, { toLowerCase: () => "George" }, { toLowerCase: () => "Jean-Philippe" }, { toLowerCase: () => "Jean-Philippe" }]
        let result = _125_ValidPalindrome(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1 = [{ toLowerCase: () => "Jean-Philippe" }, { toLowerCase: () => "Pierre Edouard" }, { toLowerCase: () => "Edmond" }, { toLowerCase: () => "Michael" }]
        let result = _125_ValidPalindrome(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1 = [{ toLowerCase: () => "Jean-Philippe" }, { toLowerCase: () => "Jean-Philippe" }, { toLowerCase: () => "George" }, { toLowerCase: () => "Pierre Edouard" }]
        let result = _125_ValidPalindrome(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1 = [{ toLowerCase: () => "Michael" }, { toLowerCase: () => "Pierre Edouard" }, { toLowerCase: () => "Anas" }, { toLowerCase: () => "Edmond" }]
        let result = _125_ValidPalindrome(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _125_ValidPalindrome([])
        expect(result).toMatchSnapshot()
    })
})
