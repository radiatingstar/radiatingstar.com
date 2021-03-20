import { isNone, none, Option, some, toNullable } from "fp-ts/Option"

/**
 * Object serving as a container for any application path. Validates the path
 * correctness and enables paths concatenation.
 */
export class AppPath {
  readonly #path: string

  /**
   * Creates the AppPath optional object. In case the path is invalid, `none`
   * is returned.
   *
   * @example
   * const myPath = AppPath.from("/my")
   *
   * @param path Path string with "/" at the beginning.
   */
  static from(path: string): Option<AppPath> {
    if (!AppPath.isValidPath(path)) {
      return none
    }
    return some(new AppPath(path))
  }

  /**
   * Combines multiple paths into a single one. Operates on Options.
   *
   * @example
   * const appPath = AppPath.from("/app")
   * const settingsPath = App.from("/settings")
   * AppPath.concat(appPath, settingsPath) // => AppPath { "/app/settings" }
   *
   * @param paths List of Option<AppPath> to combine.
   */
  static concat(...paths: Array<Option<AppPath>>): Option<AppPath> {
    // TODO: would be nice to have this method more functional, but currently
    //   I have no idea how to do it.
    if (paths.some((path) => isNone(path))) {
      return none
    }
    return AppPath.from(
      paths
        .map((path) => toNullable(path))
        // eslint-disable-next-line unicorn/no-array-reduce
        .reduce((outcome, path) => outcome + path, "")
    )
  }

  /**
   * Ensures the path string used for the AppPath creation is correct.
   *
   * @param path Potential path to be validated.
   * @private
   */
  private static isValidPath(path: string): boolean {
    return /^\/\S+$/.test(path)
  }

  private constructor(path: string) {
    this.#path = path
  }

  /**
   * Enables path's stringification when used in external world.
   */
  toString(): string {
    return this.#path
  }
}
