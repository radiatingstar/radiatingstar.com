import { render, screen } from "@testing-library/react"
import React from "react"
import { PostInfo } from "./post-info.component"

describe("Post Info component", () => {
  beforeEach(() =>
    render(
      <PostInfo
        tags={["tag1", "tag2"]}
        timeToRead={10}
        date="date"
        formattedDate="formatted_date"
      />
    )
  )

  it("should display the tags", () => {
    expect(screen.getByText("tag1")).toBeInTheDocument()
    expect(screen.getByText("tag2")).toBeInTheDocument()
  })

  it("should display the time to read", () => {
    expect(screen.getByText(/10/)).toBeInTheDocument()
  })

  it("should display the date", () => {
    expect(screen.getByText("formatted_date")).toBeInTheDocument()
  })
})
