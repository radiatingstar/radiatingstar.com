import { render } from "@testing-library/react"
import React from "react"
import { StarSwag } from "./star-swag.component"

describe("Star Swag component", () => {
  it("should render a star", () => {
    const { getByRole } = render(<StarSwag />)
    expect(getByRole("img")).toHaveTextContent("★")
  })
})
