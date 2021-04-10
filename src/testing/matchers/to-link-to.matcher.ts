import diff from "jest-diff"

expect.extend({
  toLinkTo(received: HTMLAnchorElement, expected: unknown) {
    const linkTarget = received.getAttribute("href")
    const pass = this.equals(linkTarget, expected)
    return {
      pass,
      message() {
        const difference = diff(expected, linkTarget)
        return `expected the different link target\n${difference}`
      },
    }
  },
})
