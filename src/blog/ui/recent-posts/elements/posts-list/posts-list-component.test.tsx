import { render, RenderResult } from "@testing-library/react"
import React from "react"
import { BlogPostPreview } from "../../../../types/blog-post-preview"
import { PostsList } from "./posts-list.component"

describe("Posts List component", () => {
  describe("when no items were provided", () => {
    it("should render a fallback", () => {
      const { getByText } = render(
        <PostsList
          posts={[]}
          fallback={<div>fallback</div>}
          renderPost={() => <div />}
        />
      )
      expect(getByText("fallback")).toBeInTheDocument()
    })
  })
  describe("when posts are provided", () => {
    const posts: BlogPostPreview[] = [
      { fields: { slug: "/slug-1" }, frontmatter: { title: "title 1" } },
      { fields: { slug: "/slug-2" }, frontmatter: { title: "title 2" } },
    ]
    let result: RenderResult
    beforeEach(() => {
      result = render(
        <PostsList
          posts={posts}
          fallback={<div>fallback</div>}
          renderPost={(post) => (
            <>
              {post.fields?.slug} {post.frontmatter?.title}
            </>
          )}
        />
      )
    })
    it("should not render a fallback", () => {
      const { queryByText } = result
      expect(queryByText("fallback")).not.toBeInTheDocument()
    })
    it("should render all items", () => {
      const { getByText } = result
      expect(getByText("/slug-1 title 1")).toBeInTheDocument()
      expect(getByText("/slug-2 title 2")).toBeInTheDocument()
    })
  })
})
