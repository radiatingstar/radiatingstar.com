import { render, screen } from "@testing-library/react"
import React, { ComponentType } from "react"

export const ensureChildren = (Component: ComponentType): void => {
  describe("when provided with children", () => {
    it("should render them", () => {
      render(<Component>content</Component>)
      expect(screen.getByText("content")).toBeInTheDocument()
    })
  })
}
