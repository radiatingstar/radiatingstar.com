import { render, screen } from "@testing-library/react"
import React from "react"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { BlogIndexPage } from "./blog-index-page.component"

jest.mock("../../../seo", () => ({
  // eslint-disable-next-line react/display-name
  SEO: ({ title }: { title: string }) => <div data-testid="seo">{title}</div>,
}))

const dataWithPosts = {
  allPosts: {
    edges: [
      {
        node: {
          excerpt: "Rover is rolling.",
          fields: {
            slug: "/curiosity",
          },
          frontmatter: {
            date: "2020",
            title: "Curiosity",
          },
        },
      },
      {
        node: {
          excerpt: "Straight into Saturn.",
          fields: {
            slug: "/cassini",
          },
          frontmatter: {
            date: "2018",
            title: "Cassini",
          },
        },
      },
    ],
  },
}

describe("Blog Index Page component", () => {
  it("should set the page title", () => {
    const data = {
      allPosts: { edges: [] },
    }
    render(<BlogIndexPage data={data} />)
    expect(screen.getByText("All posts")).toBeInTheDocument()
  })
  describe("with posts", () => {
    beforeEach(() =>
      render(<BlogIndexPage data={dataWithPosts} layout={TestLayout} />)
    )
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
})
