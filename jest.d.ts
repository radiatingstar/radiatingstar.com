// TODO: How to move those declarations inside the testing module?
//   It sucks the declarations are separated from the functions.

declare global {
  namespace jest {
    interface Matchers<R> {
      arrayToContainObject(input: unknown): R;
    }
  }
}


export {}
