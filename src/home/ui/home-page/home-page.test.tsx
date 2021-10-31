import { render, screen } from "@testing-library/react"
import React from "react"
import { mocked } from "ts-jest/utils"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { ensureSeoTitle } from "../../../testing/checks/seoe.check"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { HomePage } from "./home-page.component"

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
          excerpt: "excerpt",
          timeToRead: 10,
          frontmatter: {
            title: "Post title",
            tags: ["tag"],
            formattedDate: "July 20th, 2021",
            date: "2021-07-20T20:00:00.000Z",
          },
          fields: {
            slug: "/post",
          },
        },
      },
    ],
  },
}

const data = {
  site: {
    siteMetadata: {
      title: "Home Page",
    },
  },
  recentPosts: { edges: [] },
}

describe("Home Page component", () => {
  checkAccessibility(<HomePage data={data} />)
  describe("when passed site metadata", () => {
    describe("that is valid", () => {
      beforeEach(() => render(<HomePage data={data} layout={TestLayout} />))
      ensureSeoTitle("Home Page")
    })
    describe("that is invalid", () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      beforeAll(() => jest.spyOn(console, "error").mockImplementation(() => {}))
      afterAll(() => mocked(console.error).mockRestore())
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
      expect(link).toLinkTo("/blog/post")
      expect(link).toHaveTextContent("Post title")
    })
  })
})
