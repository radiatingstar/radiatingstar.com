import React from "react"
import { render, screen } from "@testing-library/react"
import { Logo } from "./logo.component"

describe("Logo component", () => {
  beforeEach(() => render(<Logo />))
  it("should render a star", () => {
    expect(screen.getByRole("img")).toHaveTextContent("★")
  })
})
