import { render } from "@testing-library/react"
import React from "react"
import { PrimaryFooterContent } from "./primary-footer-content.component"

describe("Primary Footer Content component", () => {
  describe("when provided with children", () => {
    it("should render them", () => {
      const { container } = render(
        <PrimaryFooterContent>content</PrimaryFooterContent>
      )
      expect(container).toHaveTextContent("content")
    })
  })
})
