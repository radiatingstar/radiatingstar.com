import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { Header } from "./header.component"

describe("Header component", () => {
  checkAccessibility(<Header />)
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
