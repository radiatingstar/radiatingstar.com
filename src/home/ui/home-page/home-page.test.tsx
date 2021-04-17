import { render, screen } from "@testing-library/react"
import React from "react"
import { mocked } from "ts-jest/utils"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { ensureSeoTitle } from "../../../testing/checks/seo-title.check"
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
      ensureSeoTitle(<HomePage data={data} />, "Home Page")
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
      expect(link1).toLinkTo(
        "https://github.com/radiatingstar/radiatingstar.com"
      )
      expect(link1).toHaveTextContent("Project #1")
      expect(link2).toLinkTo(
        "https://github.com/radiatingstar/radiatingstar-2.com"
      )
      expect(link2).toHaveTextContent("Project #2")
    })
  })
})
