import { render, screen } from "@testing-library/react"
import React from "react"
import { mocked } from "ts-jest/utils"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import {
  ensureSeoDescription,
  ensureSeoTitle,
} from "../../../testing/checks/seoe.check"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { BlogIndexPage } from "./blog-index-page.component"

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

const emptyData = {
  allPosts: { edges: [] },
}

describe("Blog Index Page component", () => {
  checkAccessibility(<BlogIndexPage data={emptyData} />)
  describe("seo", () => {
    beforeEach(() => render(<BlogIndexPage data={emptyData} />))
    ensureSeoTitle("All posts")
    ensureSeoDescription(
      "Read and learn about programming, web development, " +
        "React, CSS and other great tools."
    )
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
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      beforeAll(() => jest.spyOn(console, "error").mockImplementation(() => {}))
      afterAll(() => mocked(console.error).mockRestore())
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
