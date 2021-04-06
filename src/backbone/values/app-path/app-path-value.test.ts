import { toNullable } from "fp-ts/Option"
import { AppPath } from "./app-path.value"

describe("AppPath value object", () => {
  describe("when creating", () => {
    describe.each([
      ["missing slash", "missing-slash"],
      ["white spaces", "/white spaces"],
    ])("with %s", (_, value) => {
      it("should return none", () => {
        expect(AppPath.from(value)).toBeNone()
      })
    })
    describe.each([
      ["proper path", "/valid"],
      ["index path", "/"],
    ])("with %s", (_, path) => {
      it("should return a path object", () => {
        expect(toNullable(AppPath.from(path))).toBeInstanceOf(AppPath)
      })
    })
  })
  describe("when using", () => {
    describe("as a string", () => {
      it("should be passable to links", () => {
        const value = toNullable(AppPath.from("/valid"))
        expect(`${value}`).toBe("/valid")
      })
    })
  })
  describe("when combining", () => {
    describe("with another valid path", () => {
      const path = toNullable(
        AppPath.concat(AppPath.from("/valid"), AppPath.from("/path"))
      )
      expect(`${path}`).toBe("/valid/path")
    })
    describe("with invalid paths", () => {
      it("should be none", () => {
        const path = AppPath.concat(
          AppPath.from("/valid"),
          AppPath.from("/in valid")
        )
        expect(path).toBeNone()
      })
    })
  })
  describe("when accessing value", () => {
    const path = "/path"
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const appPath = toNullable(AppPath.from(path))!
    it("should return the content", () => {
      expect(appPath.value).toBe(path)
    })
  })
})
