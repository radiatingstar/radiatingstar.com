import { assertDefined } from "./assert-defined.assertion"

describe("Defined assertion", () => {
  describe("when passing defined values", () => {
    it("does nothing for strings", () => {
      expect(assertDefined("")).toBeUndefined()
    })
    it("does nothing for numbers", () => {
      expect(assertDefined(0)).toBeUndefined()
    })
    it("does nothing for booleans", () => {
      expect(assertDefined(false)).toBeUndefined()
    })
    it("does nothing for objects", () => {
      expect(assertDefined({})).toBeUndefined()
    })
    it("does nothing for arrays", () => {
      expect(assertDefined([])).toBeUndefined()
    })
    it("does nothing for functions", () => {
      expect(assertDefined(() => "")).toBeUndefined()
    })
  })
  describe("when passing nullish values", () => {
    it("does nothing for strings", () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      expect(() => assertDefined(undefined)).toThrow()
    })
    it("does nothing for strings", () => {
      // eslint-disable-next-line unicorn/no-null
      expect(() => assertDefined(null)).toThrow()
    })
  })
})
