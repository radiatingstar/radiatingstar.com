// eslint-disable-next-line unicorn/prevent-abbreviations
import "./matchers/array-to-contain-object.matcher"
import "./matchers/to-link-to.matcher"
import "./config/jest-dom"
import "@relmify/jest-fp-ts"
import { toHaveNoViolations } from "jest-axe"

// Read more about what's that here:
// https://github.com/facebook/jest/issues/335#issuecomment-485382254
jest.mock("../seo/ui/seo/seo.component", () =>
  jest.requireActual("../seo/ui/seo/__mocks__/seo.component")
)

expect.extend(toHaveNoViolations)
