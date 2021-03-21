import { none, Option, some } from "fp-ts/Option"

/**
 * Container object used to store the valid and in bound name string
 * used as a navigation link's title.
 */
export class NavigationItemName {
  readonly #name: string

  private static NAME_LENGTH_MIN_LIMIT = 3
  private static NAME_LENGTH_MAX_LIMIT = 20

  /**
   * Creates the navigation name object with the name you want. The name will
   * be normalized (trimmed and similar) to reduce unnecessary space.
   *
   * The size limit of the name value os between 3 and 20.
   *
   * @example
   * const myName = NavigationItemName.from("my name")
   *
   * @param name Name to be used as a base for this object.
   */
  static from(name: string): Option<NavigationItemName> {
    const normalizedName = NavigationItemName.normalizeName(name)
    if (!NavigationItemName.isValidName(normalizedName)) {
      return none
    }
    return some(new NavigationItemName(normalizedName))
  }

  /**
   * Ensures the provided name meets the requirements.
   *
   * @param name Potential name value to be used.
   * @private
   */
  private static isValidName(name: string): boolean {
    return (
      name.length >= NavigationItemName.NAME_LENGTH_MIN_LIMIT &&
      name.length <= NavigationItemName.NAME_LENGTH_MAX_LIMIT
    )
  }

  /**
   * Removes unnecessary spaces and transforms the string to be nicer.
   *
   * @param name String value to be transformed.
   * @private
   */
  private static normalizeName(name: string): string {
    return name.trim().replace(/\s+/, " ")
  }

  private constructor(name: string) {
    this.#name = name
  }

  get value(): string {
    return this.#name
  }

  /**
   * Enables names's stringification when used in external world.
   */
  toString(): string {
    return this.#name
  }
}
