import { render, screen } from "@testing-library/react"
import React from "react"
import { PostItem } from "./post-item.component"

describe("Post Item component", () => {
  beforeEach(() => {
    render(
      <PostItem
        title="post title"
        slug="/slug"
        excerpt="post excerpt"
        tags={["tag1", "tag2"]}
        timeToRead={10}
        date="2021-07-20T20:00:00.000Z"
        formattedDate="August 15th, 2012"
      />
    )
  })
  it("should display the post's title", () => {
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "post title"
    )
  })
  it("should render the post's slug", () => {
    expect(screen.getByRole("link")).toLinkTo("/slug")
  })
  it("should display the post's excerpt", () => {
    expect(screen.getByText("post excerpt")).toBeInTheDocument()
  })
  it("should display the tags list", () => {
    expect(screen.getByText(/tag1/)).toBeInTheDocument()
    expect(screen.getByText(/tag2/)).toBeInTheDocument()
  })
  it("should display the time to read value", () => {
    expect(screen.getByText(/10/)).toBeInTheDocument()
  })
  it("should display the date", () => {
    expect(screen.getByText("August 15th, 2012")).toBeInTheDocument()
  })
})
