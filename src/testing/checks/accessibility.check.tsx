import { render } from "@testing-library/react"
import { axe } from "jest-axe"
import { ReactElement } from "react"

export const checkAccessibility = (component: ReactElement): void => {
  describe("accessibility", () => {
    it("should be top notch", async () => {
      const { container } = render(component)
      const result = await axe(container)
      expect(result).toHaveNoViolations()
    })
  })
}
