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
  describe("in the header area", () => {
    beforeEach(() => {
      render(<CoreLayout />)
    })
    it("should display a link to the home page", () => {
      const banner = screen.getByRole("banner")
      const logo = within(banner).getByRole("img", { hidden: true })
      // eslint-disable-next-line testing-library/no-node-access
      const homeLink = logo.parentNode
      expect(homeLink).toLinkTo("/")
    })
    it("should display the GitHub link", () => {
      expect(
        within(screen.getByRole("banner")).getByRole("link", {
          name: "RadiatingStar's GitHub",
        })
      ).toLinkTo("https://github.com/radiatingstar")
    })
    it("should display a Twitter contact link", () => {
      expect(
        within(screen.getByRole("banner")).getByRole("link", {
          name: "RadiatingStar's Twitter",
        })
      ).toLinkTo("https://twitter.com/radiatingstar")
    })
  })
  describe("in the footer area", () => {
    beforeEach(() => render(<CoreLayout />))
    it("should display a current year's copyright notice", () => {
      expect(
        screen.getByText(new RegExp(`${new Date().getFullYear()}`))
      ).toBeInTheDocument()
    })
    it("should link to the tech page", () => {
      expect(screen.getByRole("link", { name: "Tech stack" })).toLinkTo("/tech")
    })
    it("should link to the projects page", () => {
      expect(screen.getByRole("link", { name: "Projects" })).toLinkTo(
        "/projects"
      )
    })
  })
})
