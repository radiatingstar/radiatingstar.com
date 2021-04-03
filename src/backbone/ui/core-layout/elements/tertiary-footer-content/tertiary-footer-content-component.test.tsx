import { render } from "@testing-library/react"
import React from "react"
import { TertiaryFooterContent } from "./tertiary-footer-content.component"

describe("Tertiary Footer Content component", () => {
  describe("when provided with children", () => {
    it("should render them", () => {
      const { container } = render(
        <TertiaryFooterContent>content</TertiaryFooterContent>
      )
      expect(container).toHaveTextContent("content")
    })
  })
})
