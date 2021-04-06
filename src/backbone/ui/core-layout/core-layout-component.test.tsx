import { render, RenderResult, within } from "@testing-library/react"
import React from "react"
import { CoreLayout } from "./core-layout.component"

describe("Core Layout component", () => {
  describe("when passed content", () => {
    it("should render it", () => {
      const { getByText } = render(
        <CoreLayout>
          <div>content</div>
        </CoreLayout>
      )
      expect(getByText("content")).toBeInTheDocument()
    })
  })
  describe("when passed a navigation", () => {
    it("should render it", () => {
      const { getByText } = render(<CoreLayout navigation={<div>nav</div>} />)
      expect(getByText("nav")).toBeInTheDocument()
    })
  })
  describe("in the header area", () => {
    it("should display a link to the home page", () => {
      const { getByRole, container } = render(<CoreLayout />)
      const homeLink = container.querySelector("[href='/']")
      expect(getByRole("banner")).toContainElement(homeLink as HTMLElement)
    })
  })
  describe("in the footer area", () => {
    let result: RenderResult
    beforeEach(() => {
      result = render(<CoreLayout />)
    })
    it("should display a current year's copyright notice", () => {
      expect(
        result.getByText(new RegExp(`${new Date().getFullYear()}`))
      ).toBeInTheDocument()
    })
    it("should link to the GitHub repo", () => {
      expect(
        result.container.querySelector(
          "[href='https://github.com/radiatingstar/radiatingstar.com']"
        )
      ).toBeInTheDocument()
    })
    it("should display the GitHub link", () => {
      expect(
        result.container.querySelector(
          "[href='https://github.com/radiatingstar/']"
        )
      ).toBeInTheDocument()
    })
    it("should display a Twitter contact link", () => {
      expect(
        result.container.querySelector(
          "[href='https://twitter.com/radiatingstar']"
        )
      ).toBeInTheDocument()
    })
  })
})
