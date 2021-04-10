import { render, RenderResult } from "@testing-library/react"
import React from "react"
import { RecentPostItem } from "./recent-post-item.component"

describe("Recent Post Item component", () => {
  let result: RenderResult
  beforeEach(() => {
    result = render(<RecentPostItem title="post title" slug="/slug" />)
  })
  it("should display the post's title", () => {
    expect(result.getByText("post title")).toBeInTheDocument()
  })
  it("should render the post's slug", () => {
    expect(result.getByRole("link")).toLinkTo("/slug")
  })
})
