import { isSome, none, Option, some, Some } from "fp-ts/Option"
import { NavigationItem } from "../navigation-item/navigation-item.value"

/**
 * Object representing a navigation consisting of navigation items.
 * Validates the items and returns them as an iterator for convenience.
 */
export class Navigation {
  readonly #items: Array<Some<NavigationItem>>

  /**
   * Creates the navigation based on provided items.
   *
   * Navigation can't be empty, so returns none if no item was provided.
   *
   * @example
   * const item1 = NavigationItem.create({
   *   path: AppPath.from("/path"),
   *   name: NavigationItemName.from("name"),
   * })
   * const item2 = NavigationItem.create({
   *   path: AppPath.from("/path-2"),
   *   name: NavigationItemName.from("name-2"),
   * })
   * const navigation = Navigation.create(item1, item2)
   *
   * @param items NavigationItems that will make up the navigation.
   */
  static create(...items: Array<Option<NavigationItem>>): Option<Navigation> {
    const normalizedItems = items.filter((item): item is Some<NavigationItem> =>
      isSome(item)
    )
    if (normalizedItems.length === 0) {
      return none
    }
    return some(new Navigation(normalizedItems))
  }

  private constructor(items: Array<Some<NavigationItem>>) {
    this.#items = items
  }

  /**
   * Navigation items iterator for accessing the values.
   *
   * @example
   * [...navigation.items].map(toComponent)
   */
  get items(): IterableIterator<Some<NavigationItem>> {
    let step = 0
    const iterator: IterableIterator<Some<NavigationItem>> = {
      next: () => {
        if (step < this.#items.length) {
          step += 1
          return {
            value: this.#items[step - 1],
            done: false,
          }
        }
        return {
          value: undefined,
          done: true,
        }
      },
      [Symbol.iterator]() {
        return iterator
      },
    }
    return iterator
  }
}
