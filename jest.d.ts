// TODO: How to move those declarations inside the testing module?
//   It sucks the declarations are separated from the functions.

declare global {
  namespace jest {
    interface Matchers<R> {
      arrayToContainObject(array: unknown): R
      toLinkTo(target: string): R
    }
  }
}

export {}
