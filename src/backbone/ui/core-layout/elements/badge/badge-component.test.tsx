import { render, screen } from "@testing-library/react"
import React from "react"
import { Badge } from "./badge.component"

describe("Badge component", () => {
  const href = "https://radiatingstar.com/"
  const source = "https://radiatingstar.com/logo.png"
  const label = "Label"
  beforeEach(() => render(<Badge href={href} src={source} label={label} />))
  describe("when href is passed", () => {
    it("should render the link with proper href value", () => {
      expect(screen.getByRole("link")).toLinkTo(href)
    })
  })
  describe("when source is passed", () => {
    it("should render the image with proper source value", () => {
      expect(screen.getByRole("img")).toHaveAttribute("src", source)
    })
  })
  describe("when label is passed", () => {
    it("should set the image's alt", () => {
      expect(screen.getByRole("img")).toHaveAttribute("alt", `${label} Badge`)
    })
    it("should be set on the link", () => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument()
    })
  })
})
