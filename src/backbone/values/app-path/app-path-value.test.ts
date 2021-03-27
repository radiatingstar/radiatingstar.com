import { toNullable } from "fp-ts/Option"
import { AppPath } from "./app-path.value"

describe("AppPath value object", () => {
  describe("when creating", () => {
    describe("with missing slash", () => {
      it("should return none", () => {
        expect(AppPath.from("missing-slash")).toBeNone()
      })
    })
    describe("with white spaces", () => {
      it("should return none", () => {
        expect(AppPath.from("/white spaces")).toBeNone()
      })
    })
    describe("with proper path", () => {
      it("should return a path object", () => {
        expect(toNullable(AppPath.from("/valid"))).toBeInstanceOf(AppPath)
      })
    })
    describe("with index path", () => {
      it("should return a path object", () => {
        expect(toNullable(AppPath.from("/"))).toBeInstanceOf(AppPath)
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
