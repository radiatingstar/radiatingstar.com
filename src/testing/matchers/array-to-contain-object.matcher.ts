expect.extend({
  arrayToContainObject(received: unknown, object: unknown) {
    const pass = this.equals(
      received,
      expect.arrayContaining([expect.objectContaining(object)])
    )
    const message = () =>
      `expected ${this.utils.printReceived(received)} ${
        pass ? "not " : ""
      }to contain object ${this.utils.printExpected(object)}`
    return {
      message,
      pass,
    }
  },
})
