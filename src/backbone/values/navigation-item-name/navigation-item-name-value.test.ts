import { toNullable } from "fp-ts/Option"
import { NavigationItemName } from "./navigation-item-name.value"

describe("Navigation item name value object", () => {
  const unnecessarySpacesInLimit = "hello      world"
    .padStart(30, " ")
    .padEnd(40, " ")

  describe("when creating", () => {
    describe.each([
      ["less than 3", "12"],
      ["more than 20", "1".repeat(21)],
    ])("with %s characters", (_, value) => {
      it("should return none", () => {
        expect(NavigationItemName.from(value)).toBeNone()
      })
    })
    // prettier-ignore
    describe.each([
      3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20,
    ])("with %s characters", (count) => {
      it("should return a name object", () => {
        expect(
          toNullable(NavigationItemName.from("1".repeat(count)))
        ).toBeInstanceOf(NavigationItemName)
      })
    })
    describe("with unnecessary spaces", () => {
      it("should ignore them if characters meet the limit", () => {
        expect(
          toNullable(NavigationItemName.from(unnecessarySpacesInLimit))
        ).toBeInstanceOf(NavigationItemName)
      })
      it("should return none if characters exceed the limit", () => {
        const unnecessarySpacesOffLimit = "hello      world"
          .repeat(10)
          .padStart(30, " ")
          .padEnd(40, " ")
        expect(NavigationItemName.from(unnecessarySpacesOffLimit)).toBeNone()
      })
    })
  })
  describe("when using", () => {
    describe("as a string", () => {
      it("should be passable to links", () => {
        const item = toNullable(NavigationItemName.from("name"))
        expect(`${item}`).toBe("name")
      })
    })
    describe("after passing unnecessary spaces", () => {
      it("should ignore them when printing", () => {
        const item = toNullable(
          NavigationItemName.from(unnecessarySpacesInLimit)
        )
        expect(`${item}`).toBe("hello world")
      })
    })
  })
  describe("when accessing value", () => {
    const name = "name"
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const item = toNullable(NavigationItemName.from(name))!
    it("should return the content", () => {
      expect(item.value).toBe(name)
    })
  })
})
