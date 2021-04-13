import { axe } from "jest-axe"
import React from "react"
import { render, screen } from "@testing-library/react"
import { Header } from "./header.component"

describe("Header component", () => {
  describe("accessibility", () => {
    it("should be top notch", async () => {
      const { container } = render(<Header />)
      const result = await axe(container)
      expect(result).toHaveNoViolations()
    })
  })
  describe.each([["logo" as const], ["navigation" as const]])(
    "when passed a %s",
    (itemName) => {
      it("should render it", () => {
        const properties = { [itemName + "Slot"]: <div>{itemName}</div> }
        render(<Header {...properties} />)
        expect(screen.getByText(itemName)).toBeInTheDocument()
      })
    }
  )
})
