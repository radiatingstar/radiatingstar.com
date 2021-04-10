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
    it("should display all links", () => {
      expect(screen.getByRole("link", { name: "Curiosity" })).toLinkTo(
        "/blog/curiosity"
      )
    })
  })

  describe("with missing post value of", () => {
    const excerpt = ""
    const fields = { slug: "" }
    const frontmatter = { date: "", title: "" }
    describe.each([
      ["frontmatter" as const, { excerpt, fields }],
      ["excerpt" as const, { fields, frontmatter }],
      ["fields" as const, { excerpt, frontmatter }],
    ])("%s", (missingKey, node) => {
      // Just avoiding unnecessary log in the console of the uncaught exception.
      let error: typeof console.error
      beforeAll(() => {
        error = console.error
        console.error = jest.fn()
      })
      afterAll(() => (console.error = error))
      it("should throw", () => {
        const data = {
          allPosts: {
            edges: [{ node }],
          },
        }
        expect(() =>
          render(<BlogIndexPage data={data} layout={TestLayout} />)
        ).toThrow()
      })
    })
  })
})
