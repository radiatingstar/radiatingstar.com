import { none, toNullable } from "fp-ts/Option"
import { AppPath } from "../app-path/app-path.value"
import { NavigationItemName } from "../navigation-item-name/navigation-item-name.value"
import { NavigationItem } from "./navigation-item.value"

describe("Navigation item value object", () => {
  const name = NavigationItemName.from("name")
  const path = AppPath.from("/path")
  describe("when creating", () => {
    describe.each([
      ["name", { name: none, path }],
      ["path", { name, path: none }],
      ["name and path", { name: none, path: none }],
    ])("with %s missing", (_, parameters) => {
      it("should return none", () => {
        expect(NavigationItem.create(parameters)).toBeNone()
      })
    })
    describe("with name and path provided", () => {
      it("should return a navigation item object", () => {
        expect(
          toNullable(NavigationItem.create({ name, path }))
        ).toBeInstanceOf(NavigationItem)
      })
    })
  })
  describe.each([
    ["name" as const, NavigationItemName],
    ["path" as const, AppPath],
  ])("when accessing %s object", (key: "name" | "path", expectedInstance) => {
    it("should return a proper value", () => {
      const item = toNullable(NavigationItem.create({ name, path }))
      // @ts-expect-error Here it's guaranteed the item will exist.
      expect(toNullable(item[key as unknown])).toBeInstanceOf(expectedInstance)
    })
  })
})
