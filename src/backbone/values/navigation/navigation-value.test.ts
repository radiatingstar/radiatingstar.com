import { none, toNullable } from "fp-ts/Option"
import { AppPath } from "../app-path/app-path.value"
import { NavigationItemName } from "../navigation-item-name/navigation-item-name.value"
import { NavigationItem } from "../navigation-item/navigation-item.value"
import { Navigation } from "./navigation.value"

describe("Navigation value object", () => {
  const item1 = NavigationItem.create({
    path: AppPath.from("/path"),
    name: NavigationItemName.from("name"),
  })
  const item2 = NavigationItem.create({
    path: AppPath.from("/path-2"),
    name: NavigationItemName.from("name-2"),
  })
  describe("when creating", () => {
    describe("using a constructor", () => {
      it("should fail", () => {
        // @ts-expect-error TS should report if the instantiation works.
        expect(new Navigation()).toBeDefined()
      })
    })
    describe("with no values", () => {
      it("should return none", () => {
        expect(Navigation.create()).toBeNone()
      })
    })
    describe("with all values missing", () => {
      it("should return none", () => {
        expect(Navigation.create(none, none)).toBeNone()
      })
    })
    describe("with proper single value", () => {
      it("should create the object", () => {
        expect(toNullable(Navigation.create(item1))).toBeInstanceOf(Navigation)
      })
    })
    describe("with some values missing", () => {
      it("should still work", () => {
        expect(toNullable(Navigation.create(item1, none))).toBeInstanceOf(
          Navigation
        )
      })
    })
    describe("with proper multiple values", () => {
      it("should create the object", () => {
        expect(toNullable(Navigation.create(item1, item2))).toBeInstanceOf(
          Navigation
        )
      })
    })
  })
  describe("when accessing items", () => {
    describe("made of multiple items", () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const navigation = toNullable(Navigation.create(item1, item2))!
      it("should include all of them", () => {
        expect([...navigation.items]).toHaveLength(2)
      })
      it("should preserve the order", () => {
        const [first, second] = [...navigation.items]
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        expect(toNullable(toNullable(first)!.name)!.value).toBe("name")
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        expect(toNullable(toNullable(second)!.name)!.value).toBe("name-2")
      })
    })
    describe("made of some missing items", () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const navigationWithMissingItems = toNullable(
        Navigation.create(item1, none, item2)
      )!
      it("should include all existing ones", () => {
        expect([...navigationWithMissingItems.items]).toHaveLength(2)
      })
    })
  })
})
