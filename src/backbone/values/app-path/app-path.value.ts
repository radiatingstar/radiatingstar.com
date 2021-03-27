import { chain } from "fp-ts"
import { flow } from "fp-ts/function"
import {
  fromPredicate,
  isNone,
  map,
  none,
  Option,
  toNullable,
} from "fp-ts/Option"
import { pipe } from "fp-ts/pipeable"

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
    return pipe(
      path,
      fromPredicate(AppPath.isValidPath),
      map((validPath) => new AppPath(validPath))
    )
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
    return /^\/(\S+)?$/.test(path)
  }

  constructor(path: string) {
    this.#path = path
  }

  get value(): string {
    return this.#path
  }

  /**
   * Enables path's stringification when used in external world.
   */
  toString(): string {
    return this.#path
  }
}

// const isValidPath = /^\/\S+$/.test
// const createAppPath = flow(
//   fromPredicate(isValidPath),
//   map((validPath) => new AppPath(validPath))
// )
// const contactAppPaths: (
//   paths: Array<Option<AppPath>>
// ) => Option<AppPath> = flow(
//   fromPredicate((paths) => !paths.some((element) => isNone(element))),
//   map((paths) => new AppPath(paths.join("")))
// )
//
// const x = contactAppPaths([createAppPath("/asd"), createAppPath("/asd")])
