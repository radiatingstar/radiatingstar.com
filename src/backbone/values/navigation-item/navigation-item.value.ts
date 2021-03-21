import { isNone, none, Option, Some, some } from "fp-ts/Option"
import { AppPath } from "../app-path/app-path.value"
import { NavigationItemName } from "../navigation-item-name/navigation-item-name.value"

/**
 * Value object storing the main navigation item. Consists of a path and a name.
 * Ensures both exist or returns none.
 */
export class NavigationItem {
  readonly #name: Some<NavigationItemName>
  readonly #path: Some<AppPath>

  /**
   * Creates a navigation item. Expects a proper name and path objects, otherwise
   * will fail with none.
   *
   * @example
   * const path = AppPath.from("/path")
   * const name = NavigationItemName.from("name")
   * const item = NavigationItem.create({ name, path })
   *
   * @param name NavigationItemName option.
   * @param path AppPath option.
   */
  static create({
    name,
    path,
  }: {
    name: Option<NavigationItemName>
    path: Option<AppPath>
  }): Option<NavigationItem> {
    if (isNone(name) || isNone(path)) {
      return none
    }
    return some(new NavigationItem(name, path))
  }

  private constructor(name: Some<NavigationItemName>, path: Some<AppPath>) {
    this.#name = name
    this.#path = path
  }

  get name(): Option<NavigationItemName> {
    return this.#name
  }

  get path(): Option<AppPath> {
    return this.#path
  }
}
