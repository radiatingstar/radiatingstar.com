import { render } from "@testing-library/react"
import React from "react"
import { SecondaryFooterContent } from "./secondary-footer-content.component"

describe("Secondary Footer Content component", () => {
  describe("when provided with children", () => {
    it("should render them", () => {
      const { container } = render(
        <SecondaryFooterContent>content</SecondaryFooterContent>
      )
      expect(container).toHaveTextContent("content")
    })
  })
})
