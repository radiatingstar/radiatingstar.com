import { render, screen } from "@testing-library/react"
import React from "react"
import { PostsList } from "./posts-list.component"

const posts = [
  {
    excerpt: "Rover is rolling.",
    fields: {
      slug: "/curiosity",
    },
    frontmatter: {
      date: "2020",
      title: "Curiosity",
    },
  },
  {
    excerpt: "Straight into Saturn.",
    fields: {
      slug: "/cassini",
    },
    frontmatter: {
      date: "2018",
      title: "Cassini",
    },
  },
]

describe("Posts List component", () => {
  beforeEach(() => render(<PostsList posts={posts} />))
  it("should display all excerpts", () => {
    expect(screen.getByText("Rover is rolling.")).toBeInTheDocument()
    expect(screen.getByText("Straight into Saturn.")).toBeInTheDocument()
  })
  it("should display all dates", () => {
    expect(screen.getByText("2020")).toBeInTheDocument()
    expect(screen.getByText("2018")).toBeInTheDocument()
  })
  it("should display all links", () => {
    expect(screen.getByRole("link", { name: "Curiosity" })).toHaveAttribute(
      "href",
      "/blog/curiosity"
    )
    expect(screen.getByRole("link", { name: "Cassini" })).toHaveAttribute(
      "href",
      "/blog/cassini"
    )
  })
})
