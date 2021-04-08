import { render, screen } from "@testing-library/react"
import React from "react"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { HomePage } from "./home-page.component"

jest.mock("../../../seo", () => ({
  // eslint-disable-next-line react/display-name
  SEO: ({ title }: { title: string }) => <div data-testid="seo">{title}</div>,
}))

const homePageData = {
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
    it("should display them", () => {
      render(<HomePage data={homePageData} layout={TestLayout} />)
      const link = screen.getByRole("link", { name: /Post/ })
      expect(link).toHaveAttribute("href", "/blog/post")
      expect(link).toHaveTextContent("Post title")
    })
  })
  describe("with projects", () => {
    const projects = [
      {
        title: "Project #1",
        link: "https://github.com/radiatingstar/radiatingstar.com",
      },

      {
        title: "Project #2",
        link: "https://github.com/radiatingstar/radiatingstar-2.com",
      },
    ]
    it("should display them", () => {
      render(
        <HomePage data={homePageData} layout={TestLayout} projects={projects} />
      )
      const link1 = screen.getByRole("link", { name: /Project #1/ })
      const link2 = screen.getByRole("link", { name: /Project #2/ })
      expect(link1).toHaveAttribute(
        "href",
        "https://github.com/radiatingstar/radiatingstar.com"
      )
      expect(link1).toHaveTextContent("Project #1")
      expect(link2).toHaveAttribute(
        "href",
        "https://github.com/radiatingstar/radiatingstar-2.com"
      )
      expect(link2).toHaveTextContent("Project #2")
    })
  })
})
