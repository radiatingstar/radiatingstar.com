import { render, screen } from "@testing-library/react"
import React from "react"
import { RecentProjectItem } from "./recent-project-item.component"

describe("Recent Project Item component", () => {
  beforeEach(() => {
    render(
      <RecentProjectItem title="Project #9" link="https://radiatingstar.com" />
    )
  })
  it("should render the title", () => {
    expect(screen.getByText("Project #9")).toBeInTheDocument()
  })
  it("should render the proper link", () => {
    expect(screen.getByRole("link")).toLinkTo("https://radiatingstar.com")
  })
  it("should pass the juices", () => {
    expect(screen.getByRole("link")).toHaveAttribute("rel", "")
  })
})
