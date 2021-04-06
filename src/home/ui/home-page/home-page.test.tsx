import { render } from "@testing-library/react"
import React from "react"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { HomePage } from "./home-page.component"

jest.mock("../../../seo", () => ({
  // eslint-disable-next-line react/display-name
  SEO: ({ title }: { title: string }) => <div data-testid="seo">{title}</div>,
}))

describe("Home Page component", () => {
  describe("when passed site metadata", () => {
    describe("that is valid", () => {
      it("should set the page title", async () => {
        const data = {
          site: {
            siteMetadata: {
              title: "Home Page",
            },
          },
          recentPosts: { edges: [] },
        }
        const { getByText } = render(<HomePage data={data} />)
        expect(getByText("Home Page")).toBeInTheDocument()
      })
    })
    describe("that is invalid", () => {
      // Just avoiding unnecessary log in the console of the uncaught exception.
      let error: typeof console.error
      beforeAll(() => {
        error = console.error
        console.error = jest.fn()
      })
      afterAll(() => (console.error = error))
      it("should throw an error", async () => {
        const data = {
          site: {
            siteMetadata: {},
          },
          recentPosts: { edges: [] },
        }
        expect(() => render(<HomePage data={data} />)).toThrow()
      })
    })
  })
  describe("with posts", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "Home Page",
        },
      },
      recentPosts: {
        edges: [
          {
            node: {
              frontmatter: {
                title: "Post title",
              },
              fields: {
                slug: "/post",
              },
            },
          },
        ],
      },
    }
    it("should display them", () => {
      const { getByRole } = render(<HomePage data={data} layout={TestLayout} />)
      expect(getByRole("link")).toHaveAttribute("href", "/blog/post")
      expect(getByRole("link")).toHaveTextContent("Post title")
    })
  })
})
