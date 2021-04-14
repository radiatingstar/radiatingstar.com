import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { Logo } from "./logo.component"

describe("Logo component", () => {
  checkAccessibility(<Logo />)
  describe("image", () => {
    beforeEach(() => render(<Logo />))
    it("should render a star", () => {
      expect(screen.getByRole("img", { hidden: true })).toHaveTextContent("★")
    })
  })
})
