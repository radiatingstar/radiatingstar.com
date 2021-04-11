import { render, screen } from "@testing-library/react"
import React from "react"
import { RecentPostItem } from "./recent-post-item.component"

describe("Recent Post Item component", () => {
  beforeEach(() => {
    render(<RecentPostItem title="post title" slug="/slug" />)
  })
  it("should display the post's title", () => {
    expect(screen.getByText("post title")).toBeInTheDocument()
  })
  it("should render the post's slug", () => {
    expect(screen.getByRole("link")).toLinkTo("/slug")
  })
})
