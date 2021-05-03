import React from "react"
import { render, screen } from "@testing-library/react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { ensureSeoTitle } from "../../../testing/checks/seo-title.check"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { TechPage } from "./tech-page.component"

const component = <TechPage layout={TestLayout} />

describe("Tech Page component", () => {
  beforeEach(() => render(component))
  checkAccessibility(component)
  ensureSeoTitle("Tech")
  it("should display the main heading", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Technologies" })
    ).toBeInTheDocument()
  })
  describe("status area", function () {
    it.each([
      [
        "Code Climate Test Coverage",
        "https://codeclimate.com/github/radiatingstar/radiatingstar.com/test_coverage",
      ],
      ["Codecov", "https://codecov.io/gh/radiatingstar/radiatingstar.com"],
      [
        "Code Climate Maintainability",
        "https://codeclimate.com/github/radiatingstar/radiatingstar.com/maintainability",
      ],
      [
        "Netlify Build Status",
        "https://app.netlify.com/sites/radiatingstarcom/deploys",
      ],
    ])("should display the %s badge", (name, url) => {
      expect(screen.getByRole("link", { name })).toLinkTo(url)
    })
  })
  describe("technologies list", () => {
    it.each([
      ["Gatsby", "gatsbyjs.com", "https://www.gatsbyjs.com/"],
      ["React", "reactjs.org", "https://reactjs.org/"],
      ["TypeScript", "typescriptlang.org", "https://www.typescriptlang.org/"],
      ["Netlify", "netlify.com", "https://www.netlify.com/"],
      [
        "React Testing Library",
        "testing-library.com",
        "https://testing-library.com/",
      ],
      ["Jest", "jestjs.io", "https://jestjs.io/"],
      [
        "Styled Components",
        "styled-components.com",
        "https://styled-components.com/",
      ],
    ])("should display info about %s", (techName, techLinkName, techLink) => {
      expect(
        screen.getByRole("heading", { level: 2, name: techName })
      ).toBeInTheDocument()
      expect(screen.getByRole("link", { name: techLinkName })).toLinkTo(
        techLink
      )
    })
  })
  it("should link to the project's package.json", () => {
    expect(screen.getByRole("link", { name: /package\.json/i })).toLinkTo(
      "https://github.com/radiatingstar/radiatingstar.com/blob/master/package.json"
    )
  })
})
