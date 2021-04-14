import { render, screen, within } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { CoreLayout } from "./core-layout.component"

describe("Core Layout component", () => {
  checkAccessibility(<CoreLayout />)
  describe("when passed content", () => {
    it("should render it", () => {
      render(
        <CoreLayout>
          <div>content</div>
        </CoreLayout>
      )
      expect(screen.getByText("content")).toBeInTheDocument()
    })
  })
  describe("when passed a navigation", () => {
    it("should render it", () => {
      render(<CoreLayout navigation={<div>nav</div>} />)
      expect(screen.getByText("nav")).toBeInTheDocument()
    })
  })
  describe("in the header area", () => {
    it("should display a link to the home page", () => {
      render(<CoreLayout />)
      const banner = screen.getByRole("banner")
      const logo = within(banner).getByRole("img", { hidden: true })
      const homeLink = logo.parentNode
      expect(homeLink).toLinkTo("/")
    })
  })
  describe("in the footer area", () => {
    beforeEach(() => render(<CoreLayout />))
    it("should display a current year's copyright notice", () => {
      expect(
        screen.getByText(new RegExp(`${new Date().getFullYear()}`))
      ).toBeInTheDocument()
    })
    it("should link to the GitHub repo", () => {
      expect(
        screen.getByRole("link", { name: /code available on GitHub/ })
      ).toLinkTo("https://github.com/radiatingstar/radiatingstar.com")
    })
    it("should display the GitHub link", () => {
      expect(screen.getByRole("link", { name: "GitHub" })).toLinkTo(
        "https://github.com/radiatingstar/"
      )
    })
    it("should display a Twitter contact link", () => {
      expect(screen.getByRole("link", { name: "Twitter" })).toLinkTo(
        "https://twitter.com/radiatingstar"
      )
    })
  })
})
