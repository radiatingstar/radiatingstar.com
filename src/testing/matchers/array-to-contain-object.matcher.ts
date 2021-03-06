expect.extend({
  arrayToContainObject(received: unknown, object: unknown) {
    const pass = this.equals(
      received,
      expect.arrayContaining([expect.objectContaining(object)])
    )
    return pass
      ? {
          message: () =>
            `expected ${this.utils.printReceived(
              received
            )} not to contain object ${this.utils.printExpected(object)}`,
          pass: true,
        }
      : {
          message: () =>
            `expected ${this.utils.printReceived(
              received
            )} to contain object ${this.utils.printExpected(object)}`,
          pass: false,
        }
  },
})
