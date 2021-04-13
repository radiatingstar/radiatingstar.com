import { render, screen } from "@testing-library/react"
import { axe } from "jest-axe"
import React from "react"
import { Logo } from "./logo.component"

describe("Logo component", () => {
  describe("accessibility", () => {
    it("should be top notch", async () => {
      const { container } = render(<Logo />)
      const result = await axe(container)
      expect(result).toHaveNoViolations()
    })
  })
  describe("image", () => {
    beforeEach(() => render(<Logo />))
    it("should render a star", () => {
      expect(screen.getByRole("img", { hidden: true })).toHaveTextContent("★")
    })
  })
})
