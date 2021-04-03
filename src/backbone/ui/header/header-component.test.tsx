import React from "react"
import { render } from "@testing-library/react"
import { Header } from "./header.component"

describe("Header component", () => {
  describe.each([["logo" as const], ["navigation" as const]])(
    "when passed a %s",
    (itemName) => {
      it("should render it", () => {
        const properties = { [itemName + "Slot"]: <div>{itemName}</div> }
        const { getByText } = render(<Header {...properties} />)
        expect(getByText(itemName)).toBeInTheDocument()
      })
    }
  )
})
