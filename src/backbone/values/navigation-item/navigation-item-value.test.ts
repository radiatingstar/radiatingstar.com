import { none, toNullable } from "fp-ts/Option"
import { AppPath } from "../app-path/app-path.value"
import { NavigationItemName } from "../navigation-item-name/navigation-item-name.value"
import { NavigationItem } from "./navigation-item.value"

describe("Navigation item value object", () => {
  const name = NavigationItemName.from("name")
  const path = AppPath.from("/path")
  describe("when creating", () => {
    describe("with name missing", () => {
      it("should return none", () => {
        expect(NavigationItem.create({ name: none, path })).toBeNone()
      })
    })
    describe("with path missing", () => {
      it("should return none", () => {
        expect(NavigationItem.create({ name, path: none })).toBeNone()
      })
    })
    describe("with name and path values missing", () => {
      it("should return none", () => {
        expect(NavigationItem.create({ name: none, path: none })).toBeNone()
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
  describe("when accessing name object", () => {
    it("should return a proper value", () => {
      const item = toNullable(NavigationItem.create({ name, path }))
      // @ts-expect-error Here it's guaranteed the item will exist.
      expect(toNullable(item.name)).toBeInstanceOf(NavigationItemName)
    })
  })
  describe("when accessing path object", () => {
    it("should return a proper value", () => {
      const item = toNullable(NavigationItem.create({ name, path }))
      // @ts-expect-error Here it's guaranteed the item will exist.
      expect(toNullable(item.path)).toBeInstanceOf(AppPath)
    })
  })
})
