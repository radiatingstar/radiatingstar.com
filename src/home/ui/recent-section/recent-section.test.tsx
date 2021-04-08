import { render, screen } from "@testing-library/react"
import React from "react"
import { RecentSection } from "./recent-section.component"

describe("Recent Section component", function () {
  it("should render children", () => {
    render(<RecentSection>child</RecentSection>)
    expect(screen.getByText("child")).toBeInTheDocument()
  })
})
