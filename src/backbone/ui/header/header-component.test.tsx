import React from "react"
import { render } from "@testing-library/react"
import { Header } from "./header.component"

describe("Header component", () => {
  describe("when passed a logo", () => {
    it("should render it", () => {
      const { getByText } = render(<Header logoSlot={<div>logo</div>} />)
      expect(getByText("logo")).toBeInTheDocument()
    })
  })
  describe("when passes a navigation", () => {
    it("should render it", () => {
      const { getByText } = render(<Header navigationSlot={<div>nav</div>} />)
      expect(getByText("nav")).toBeInTheDocument()
    })
  })
})
