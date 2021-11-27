import { render } from "@testing-library/react"
import React from "react"
import { mocked } from "ts-jest/utils"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import {
  ensureSeoDescription,
  ensureSeoTitle,
} from "../../../testing/checks/seoe.check"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { BlogTagPage } from "./blog-tag-page.component"

const emptyData = {
  allPosts: { edges: [] },
}

describe("Blog Tag Page component", () => {
  checkAccessibility(<BlogTagPage data={emptyData} />)
  // TODO: should use the tag's SEO values
  describe.skip("seo", () => {
    beforeEach(() => render(<BlogTagPage data={emptyData} />))
    ensureSeoTitle("All posts")
    ensureSeoDescription(
      "Read and learn about programming, web development, " +
        "React, CSS and other great tools."
    )
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
          render(<BlogTagPage data={data} layout={TestLayout} />)
        ).toThrow()
      })
    })
  })
})
