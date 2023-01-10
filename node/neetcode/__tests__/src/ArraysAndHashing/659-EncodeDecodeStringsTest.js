const _659_EncodeDecodeStrings = require("../../../src/ArraysAndHashing/659-EncodeDecodeStrings")
// @ponicode
describe("_659_EncodeDecodeStrings.encode", () => {
    test("0", () => {
        let result = _659_EncodeDecodeStrings.encode(["lint","code","love","you"]);
        expect(result).toEqual('4#lint4#code4#love3#you')
    })

    test("1", () => {
        let result = _659_EncodeDecodeStrings.encode(["we", "say", ":", "yes"])
        expect(result).toEqual('2#we3#say1#:3#yes')
    })
})
T
// @ponicode
describe("_659_EncodeDecodeStrings.decode", () => {
    test("0", () => {
        const strs = ["lint","code","love","you"];
        let encodedString = _659_EncodeDecodeStrings.encode(strs);
        let result = _659_EncodeDecodeStrings.decode(encodedString)
        expect(result).toEqual(strs)
    })

    test("1", () => {
        const strs = ["we", "say", ":", "yes"]
        let encodedString = _659_EncodeDecodeStrings.encode(strs);
        let result = _659_EncodeDecodeStrings.decode(encodedString)
        expect(result).toEqual(strs)
    })

})
